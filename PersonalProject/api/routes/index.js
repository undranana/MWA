const express = require("express");
const router = express.Router();
const controller = require("./../controllers/controller");
const controller_famousPlaces = require("./../controllers/famPlaces_controller");

router.route("/provinces/")
.get(controller.getAllProvinces)
.post(controller.addProvince);

router.route("/provinces/:provinceId")
.get(controller.getOneProvince)
.delete(controller.deleteProvince)
.patch(controller.updateProvince)
.put(controller.replaceProvince);

router.route("/provinces/:provinceId/famousplaces")
.get(controller_famousPlaces.getAll)
.post(controller_famousPlaces.addOne)

router.route("/provinces/:provinceId/famousplaces/:placeID")
.get(controller_famousPlaces.getOne)
.delete(controller_famousPlaces.deleteOne)
.patch(controller_famousPlaces.updateOne)
.put(controller_famousPlaces.replaceOne);


module.exports = router;