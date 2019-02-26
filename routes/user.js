router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);

router.get("/logout", userController.getLogout);

module.exports = router;