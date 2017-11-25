module.exports = function(sequelize, DataTypes){
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false, 
			validate: {
				len:[1, 25]
			}
		},

		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
	}, {
		timestamps: false,
		tableName: 'Burger',
		freezeTableName: true
	});
	return Burger;
};