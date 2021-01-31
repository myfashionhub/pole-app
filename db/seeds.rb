# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[
  {
    name: 'Ayesha',
    description: 'Two-contact point inverted moves'
  },
  {
    name: 'Dynamic',
    description: 'Pops and flips'
  },
  {
    name: 'Flexy',
    description: ''
  },
  {
    name: 'Foundation',
    description: 'Basic moves to build upon'
  },
  {
    name: 'Shape',
    description: ''
  },
  {
    name: 'Split',
    description: 'Pretty splitty'
  },
  {
    name: 'Strength',
    description: ''
  },
  {
    name: 'Transition',
    description: ''
  },
].map { |data| Tag.find_or_create_by(data) }
