require 'faker'

puts " making FERAL CATS :)"
FeralCat.create(name: "magherta", smellyness: 10)
FeralCat.create(name: "rocket", smellyness: 2)
FeralCat.create(name: "leonard", smellyness: 0)
FeralCat.create(name: "feebee", smellyness: 100)


puts " CREATING THOSE NICE PEEPS"
NicePerson.create(name: "bob ross")
NicePerson.create(name: "keanu")
NicePerson.create(name: "swaglord")
NicePerson.create(name: "mr rogers")

Food.create(feral_cat_id: 1, nice_person_id: 3)
Food.create(feral_cat_id: 1, nice_person_id: 2)
Food.create(feral_cat_id: 1, nice_person_id: 1)
Food.create(feral_cat_id: 2, nice_person_id: 4)
Food.create(feral_cat_id: 3, nice_person_id: 1)
