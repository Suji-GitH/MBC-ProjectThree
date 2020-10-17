const db = require("../models");

// Defining methods for the theme Controller

module.exports = {
  createTheme: function (req, res) {
    const businessId = req.params.id;
    db.App_Theme.create(req.body)
      .then(({ _id }) =>
        db.Business_Owner.findByIdAndUpdate(
          businessId,
          {
            QR_link: `/business/${businessId}/themes/${_id}`,
            $push: {
              app_theme: _id,
            },
          },
          { new: true }
        )
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  findThemeById: function (req, res) {
    db.Business_Owner.findById({ _id: req.params.id })
      .populate("app_theme")
      .select("app_theme -_id")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
