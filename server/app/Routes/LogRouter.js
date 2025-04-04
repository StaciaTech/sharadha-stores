import express from "express"
import { historyOrder, placeOrder, addSheetToExistingFile, login, verifyOTP, register, profileUpdate, getUser, verifyEmail, verifyMobile, checkUser, profileVerifyOtp, allProducts, accountDeletionVerify, accountDeletionRequest, me } from "../Controllers/LogController.js"

const router = express.Router()

router.post("/place-order", placeOrder)
router.get("/order-history/:id", historyOrder)

router.post("/new-sheet", addSheetToExistingFile)

router.post("/login", login)
router.post("/verify-otp", verifyOTP)
router.post("/register", register)
router.patch("/update-profile/:id", profileUpdate)
router.get("/get-user/:id", getUser)

router.post("/verify-email/:id", verifyEmail)
router.post("/verify-mobile/:id", verifyMobile)
router.post("/profile-verify/:id", profileVerifyOtp)

router.post("/check-user", checkUser)
router.get("/all-products", allProducts)

router.get("/api-me/:userId", me)


router.post("/delete-request-verify", accountDeletionVerify)

router.post("/account-delete-request", accountDeletionRequest)





export default router