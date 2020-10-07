# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Category Seeds
birthdays = Category.create(name: 'Birthdays')
weddings = Category.create(name: 'Weddings')
graduation = Category.create(name: 'Graduation')
holidays  = Category.create(name: 'Holidays')
vacations = Category.create(name: 'Vacation')
travel = Category.create(name: 'Travel')
dogs = Category.create(name: 'Dogs')
cats = Category.create(name: 'Cats')
treatYourself = Category.create(name: 'Treat Yourself')
love = Category.create(name: 'Love')
taxDay = Category.create(name: 'Tax Day')
adventure = Category.create(name: 'Adventure')

#Experience Seeds
bday = Experience.create(title: 'My birthday', description: 'Lots of cake and ice cream!', location: 'Bethel, AK', date: '01/26/2020', categories: [birthdays, treatYourself], coordinates: '60.791047 -161.775173')
wedding = Experience.create(title: 'We tied the knot', description: 'We\'ll be together forever!', location: 'Crested Butte, CO', date: '08/08/2020', categories: [weddings, travel], coordinates: '38.933274 -106.969525')
dogLove = Experience.create(title: 'I love these dogs', description: 'These two always make life seem brighter and give me the encouragement I need to be positive!', location: 'Milton, PA', date: '4/21/2017', categories: [dogs, graduation], coordinates: '40.997215 -76.840327')
fallFest = Experience.create(title: 'Letchworth Craft Festival', description: 'My first New York fall with the girl of my dreams!', location: 'Letchworth State Park', date: '10/9/2016', categories: [vacations, holidays], coordinates: '42.647319 -77.975859')
trailRide = Experience.create(title: 'Love is like a bike ride...', description: 'Just rode a mountain with my beautiful bride-to-be!', location: 'Crested Butte, CO', date: '8/7/2020', categories: [travel, treatYourself], coordinates: '30.401274 -97.684789')
dateNight = Experience.create(title: 'Date adventure in the botanical gardens', description: "Love (and flowers) bloom all around us- one of the best days of my life", location: 'Garfield Park Conservatory, Chicago, IL', categories: [love, travel, adventure], coordinates: '41.886385 -87.717567')
