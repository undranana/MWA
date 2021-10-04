const express = require("express");
const router = express.Router();
const controller = require("./../controllers/controller");

router.route("/provinces/")
.get(controller.getAllProvinces)
.post(controller.addProvince);

router.route("/provinces/:provinceId")
.get(controller.getOneProvince)
.delete(controller.deleteProvince)
.patch(controller.updateProvince)
.put(controller.replaceProvince);


module.exports = router;