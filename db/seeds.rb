# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
Product.destroy_all
User.destroy_all

@admin = User.create!(username: 'Garrett', email: 'garrett@garrett.com', password: 'Garrett', is_admin: true)
@admin2 = User.create!(username: 'Admin', email: 'Admin@admin.com', password: 'Admin55', is_admin: true)

Post.create!(title: 'What to expect on your first day',
             content: Faker::Lorem.paragraphs(number: 4, supplemental: true),
             user: @admin)
Post.create!(title: 'The Golden Rule of sparring',
             content: Faker::Lorem.paragraphs(number: 3, supplemental: true),
             user: @admin)
Post.create!(title: 'How to be respectful',
             content: Faker::Lorem.paragraphs(number: 3, supplemental: true),
             user: @admin)

@posts = Post.all

Comment.create!(content: 'Awesome article, 10/10!', user: @admin, post: @posts.first)
Comment.create!(content: 'You are an idiot and you have no idea what you are talking about.', user: @admin,
                post: @posts.first)
Comment.create!(content: 'Spam comment selling shady stuff here.', user: @admin2, post: @posts.first)
Comment.create!(content: 'I hate you.', user: @admin, post: @posts.second)
Comment.create!(content: "Don't listen to the haters, keep doing you.", user: @admin, post: @posts.second)
Comment.create!(content: 'I concur, fabolous article', user: @admin, post: @posts.last)
Comment.create!(content: 'Does anyone ever stare into the sky and wonder what this is all about?', user: @admin2,
                post: @posts.last)
@comments = Comment.all

Product.create!(name: 'Head Gear', category: 'Gear', brand: 'Everlast', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465029/everlast_head_gear_dfeihx.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 4, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Heavy Bag', category: 'Equipment', brand: 'Everlast', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465030/everlast_heavy_bag_mpiu0o.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 3, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Thai Pads', category: 'Gear', brand: 'Everlast', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465030/everlast_pads_mmvftt.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Speed Bag', category: 'Equipment', brand: 'Everlast', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465033/everlast_speed_bag_bkadqz.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 3, supplemental: true, random_sentences_to_add: 4), user: @admin)

Product.create!(name: 'Wall Mount Training Bag', category: 'Equipment', brand: 'Everlast',
                image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465032/everlast_wall_mount_dpueb1.jpg', review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)

Product.create!(name: 'Hand Wraps', category: 'Gear', brand: 'Everlast', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465032/everlast_wraps_abht70.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: '16oz Gloves(Red/Black)', category: 'Gear', brand: 'Everlast', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465029/everlast_16_tflkh6.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Mouth Guard', category: 'Gear', brand: 'Everlast', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465030/everlast_mouthguard_unsujd.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Rash Guard', category: 'Apparel', brand: 'Everlast', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465033/everlast_rashguard_pbqtbi.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 4, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Shin Pads', category: 'Gear', brand: 'Everlast', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465034/everlast_shin_pads_kuqb0e.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 3, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: '16oz Gloves(Dark Green)', category: 'Gear', brand: 'Fairtex', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465034/fairtex_gloves_ik1sht.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 5, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Thai Shorts', category: 'Apparel', brand: 'Fairtex', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465034/fairtex_shorts_umgod7.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Shin Pads', category: 'Gear', brand: 'Fairtex', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465034/fairtex_shinpads_kw5iqz.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Belly Pad', category: 'Gear', brand: 'Fairtex', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465033/fairtex_bellypad_ssceqt.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Focus Mitts', category: 'Gear', brand: 'Fairtex', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465034/fairtex_focus_mitts_ksmtb9.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Heavy Bag', category: 'Equipment', brand: 'Fairtex', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465034/fairtex_heavybag_j0ndwe.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 4, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Duffel Bag', category: 'Apparel', brand: 'Fairtex', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465033/fairtex_bag_knrdye.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Tear Drop Bag', category: 'Equipment', brand: 'Fairtex', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465034/fairtex_teardrop_e65ozw.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: '16oz Gloves(White)', category: 'Gear', brand: 'Fairtex', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465034/fairtex_mygloves_drct6v.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 3, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Thai Shorts', category: 'Apparel', brand: 'Yokkao', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465035/Yokkao_shorts_qulpi7.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: '16oz Gloves(Blue)', category: 'Gear', brand: 'Yokkao', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465035/muay-thai-boxing-gloves-yokkao-matrix-blue_fxecsm.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Shin Pads', category: 'Gear', brand: 'Yokkao', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465035/shin-guards-muay-thai-yokkao-matrix-red-3_j9l2dk.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Thai Pads', category: 'Gear', brand: 'Yokkao', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465035/kicking-pads-curved-muay-thai-yokkao-matrix-island-hot-pink-3_a5lk27.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Low Kick Pad', category: 'Gear', brand: 'Yokkao', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465035/low-kick-muay-thai-yokkao-orange-tiger-eden-1_ucpgki.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 3, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Tear Drop Bag', category: 'Equipment', brand: 'Yokkao', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465035/tear-drop-heavy-bags-muay-thai-yokkao-thai-flag_neyz20.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 3, supplemental: true, random_sentences_to_add: 4), user: @admin)
Product.create!(name: 'Heavy Bag', category: 'Equipment', brand: 'Yokkao', image_url: 'https://res.cloudinary.com/dyfvqwppd/image/upload/v1633465034/heavy-bags-muay-thai-yokkao-biking-red-white_tijsog.jpg',
                review: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4), user: @admin)

@products = Product.all

puts "#{User.count} users created!"
puts "#{Post.count} posts created!"
puts "#{Product.count} products created!"
puts "#{Comment.count} comments created!"
