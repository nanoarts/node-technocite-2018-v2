exports.registerHelpers = (hbs) => {
    hbs.registerHelper('staticMap', ([lng, lat]) =>
        `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`)
    
    hbs.registerHelper('caps', (val) => val.toUpperCase())
    
}