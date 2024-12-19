import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {
  CircleVariant,
  ColorVariant,
  ImageSwatch,
  RadioButtonVariant,
  RectangleVariant,
  DropDownVariation,
} from './variants';

export default function ProductVariations({
  attributes,
  variations,
  getVariation,
}) {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [filteredAttributes, setFilteredAttributes] = useState([]);

  useEffect(() => {
    initializeAttributes();
  }, []);

  const initializeAttributes = () => {
    const filteredAttrs = attributes.map(attr => {
      const availableValues = attr.attribute_values
        .map(attrValue => {
          const matchedVariation = variations.find(variation =>
            variation.attribute_values.some(
              variationAttrValue => variationAttrValue.id === attrValue.id,
            ),
          );

          if (matchedVariation) {
            return {
              ...attrValue,
              variation_image: matchedVariation.variation_image,
            };
          }

          return attrValue;
        })
        .filter(attrValue => !!attrValue.variation_image); // Only keep attributes that have a matching variation image

      return { ...attr, attribute_values: availableValues };
    });

    setFilteredAttributes(filteredAttrs);

    const initialSelected = filteredAttrs.map(attr => {
      const availableValues = attr.attribute_values.filter(attrValue =>
        variations.some(variation =>
          variation.attribute_values.some(
            variationAttrValue =>
              variationAttrValue.id === attrValue.id &&
              (variation.stock_status === 'in_stock' ||
                variation.quantity > 0) &&
              variation.status === 1,
          ),
        ),
      );

      const selectedValue =
        availableValues.length > 0 ? availableValues[0] : null;

      return selectedValue
        ? {
          attribute_id: attr.id,
          value_id: selectedValue.id,
          value: selectedValue.value,
        }
        : {
          attribute_id: attr.id,
          value_id: null,
          value: null,
        };
    });

    setSelectedAttributes(initialSelected);
    updateAttributeState(initialSelected, filteredAttrs);
    selectVariation(initialSelected);
  };

  const handleAttributeClick = (attributeId, valueId) => {
    setSelectedAttributes(prevSelectedAttributes => {
      const updatedSelectedAttributes = prevSelectedAttributes.map(attr => {
        if (attr.attribute_id === attributeId) {
          return { ...attr, value_id: valueId };
        }
        return attr;
      });
      updateAttributeState(updatedSelectedAttributes, filteredAttributes);
      selectVariation(updatedSelectedAttributes);
      return updatedSelectedAttributes;
    });
  };

  const updateAttributeState = (updatedSelectedAttributes, filteredAttrs) => {
    const updatedAttributes = filteredAttrs.map(attr => ({
      ...attr,
      attribute_values: attr.attribute_values.map(attrValue => {
        const wouldBeSelectedAttributes = updatedSelectedAttributes.map(
          selectedAttr => {
            if (selectedAttr.attribute_id === attr.id) {
              return { ...selectedAttr, value_id: attrValue.id };
            }
            return selectedAttr;
          },
        );

        const isOutOfStock = !variations.some(
          variation =>
            wouldBeSelectedAttributes.every(selectedAttr =>
              variation.attribute_values.some(
                attributeValue => attributeValue.id === selectedAttr.value_id,
              ),
            ) &&
            variation.stock_status === 'in_stock' &&
            variation.quantity > 0 &&
            variation.status === 1,
        );

        return {
          ...attrValue,
          disabled: isOutOfStock,
        };
      }),
    }));
    setFilteredAttributes(updatedAttributes);
  };

  const selectVariation = selectedAttributes => {
    const selectedVariation = variations.find(variation =>
      selectedAttributes.every(selectedAttr =>
        variation.attribute_values.some(
          attrValue => attrValue.id === selectedAttr.value_id,
        ),
      ),
    );
    getVariation(selectedVariation);
  };

  return (
    <View>
      {filteredAttributes.map(item =>
        item.style === 'rectangle' ? (
          <RectangleVariant
            key={item.id}
            onPress={handleAttributeClick}
            title={item.name}
            data={item.attribute_values}
            id={item.id}
            selectedAttributes={selectedAttributes}
          />
        ) : item.style === 'circle' ? (
          <CircleVariant
            key={item.id}
            onPress={handleAttributeClick}
            title={item.name}
            data={item.attribute_values}
            id={item.id}
            selectedAttributes={selectedAttributes}
          />
        ) : item.style === 'radio' ? (
          <RadioButtonVariant
            key={item.id}
            onPress={handleAttributeClick}
            title={item.name}
            data={item.attribute_values}
            id={item.id}
            selectedAttributes={selectedAttributes}
          />
        ) : item.style === 'color' ? (
          <ColorVariant
            key={item.id}
            onPress={handleAttributeClick}
            title={item.name}
            data={item.attribute_values}
            id={item.id}
            selectedAttributes={selectedAttributes}
          />
        ) : item.style === 'image' ? (
          <ImageSwatch
            key={item.id}
            onPress={handleAttributeClick}
            title={item.name}
            data={item.attribute_values}
            id={item.id}
            selectedAttributes={selectedAttributes}
          />
        ) : (
          item.style === 'dropdown' && (
            <DropDownVariation
              key={item.id}
              onPress={handleAttributeClick}
              title={item.name}
              data={item.attribute_values}
              id={item.id}
              selectedAttributes={selectedAttributes}
            />
          )
        ),
      )}
    </View>
  );
}
