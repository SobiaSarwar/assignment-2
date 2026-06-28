import { Recipe, KitchenExperience, Badge } from '../types';

export const INITIAL_RECIPES: Recipe[] = [
  // --- PAKISTANI RECIPES ---
  {
    id: 'pak-1',
    title: 'Authentic Sindhi Biryani',
    cuisine: 'Pakistani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 45,
    calories: 650,
    difficulty: 'Medium',
    rating: 4.9,
    reviewsCount: 142,
    isFeatured: true,
    isDailyRecommendation: true,
    isTrending: true,
    authorName: 'Chef Fatima Ali',
    authorAvatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80',
    description: 'Fragrant basmati rice layered with spicy marinated chicken, caramelized onions, fresh mint, and aromatic whole spices.',
    ingredients: [
      { name: 'Basmati Rice', amount: '3 cups (soaked)' },
      { name: 'Chicken', amount: '800g (bone-in curry cut)' },
      { name: 'Yogurt', amount: '1 cup' },
      { name: 'Onions', amount: '4 large (sliced & fried golden)' },
      { name: 'Tomatoes', amount: '3 medium (chopped)' },
      { name: 'Biryani Masala Spices', amount: '3 tbsp' },
      { name: 'Fresh Mint & Coriander', amount: '1/2 cup each' },
      { name: 'Saffron soaked in warm milk', amount: '2 tbsp' }
    ],
    instructions: [
      'Marinate chicken with yogurt, half fried onions, ginger-garlic paste, and spices for 45 minutes.',
      'Parboil basmati rice with whole spices (cardamom, bay leaf, cloves) until 70% cooked. Drain and set aside.',
      'Cook marinated chicken with chopped tomatoes until oil separates and chicken is tender.',
      'In a heavy bottom pot, layer chicken curry, chopped mint/coriander, slit green chilies, and parboiled rice.',
      'Drizzle saffron milk and melted ghee over the top layer. Cover tightly with foil (dum) and simmer on low heat for 20 minutes.',
      'Fluff gently with a fork and serve hot with cooling cucumber raita.'
    ],
    comments: [
      { id: 'c1', userName: 'Hamza K.', rating: 5, text: 'Best Biryani recipe ever! The aroma filled my entire home.', createdAt: '2 hours ago' },
      { id: 'c2', userName: 'Sarah Jenkins', rating: 5, text: 'Loved the step about layering with saffron milk. Perfect texture.', createdAt: '1 day ago' }
    ],
    createdAt: '2026-06-20'
  },
  {
    id: 'pak-2',
    title: 'Lahori Chicken Karahi',
    cuisine: 'Pakistani',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 25,
    calories: 520,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 98,
    isTrending: true,
    authorName: 'Tariq Mehmood',
    description: 'A rustic, fiery tomato and ginger based wok curry cooked at high flame, traditional to the streets of Lahore.',
    ingredients: [
      { name: 'Chicken', amount: '750g small pieces' },
      { name: 'Ripe Tomatoes', amount: '5 halved' },
      { name: 'Fresh Ginger julienned', amount: '3 tbsp' },
      { name: 'Green Chilies', amount: '6 slit' },
      { name: 'Crushed Black Pepper & Coriander Seeds', amount: '1.5 tbsp' },
      { name: 'Ghee or Desi Butter', amount: '1/2 cup' }
    ],
    instructions: [
      'Heat ghee in a wok (karahi) over high heat and fry chicken with salt and garlic paste until sealed and white.',
      'Place tomato halves skin-side up over the chicken, cover lid for 5 mins until skin loosens.',
      'Peel off tomato skins using tongs and mash the flesh into the gravy using the back of your spoon.',
      'Add freshly crushed coriander seeds, cumin, and chili flakes. Stir-fry vigorously on high flame (bhunai).',
      'Finish with abundant ginger juliennes, green chilies, and black pepper. Serve bubbling hot with naan.'
    ],
    comments: [],
    createdAt: '2026-06-18'
  },
  {
    id: 'pak-3',
    title: 'Royal Slow-Cooked Nihari',
    cuisine: 'Pakistani',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 180,
    calories: 710,
    difficulty: 'Hard',
    rating: 4.9,
    reviewsCount: 180,
    isFeatured: true,
    authorName: 'Zubair Ahmed',
    description: 'Rich, velvety beef shank stew slow-simmered overnight with bone marrow and secret spice blend.',
    ingredients: [
      { name: 'Beef Shank (Nali)', amount: '1 kg with marrow bones' },
      { name: 'Wheat Flour (Atta)', amount: '1/2 cup roasted & blended with water' },
      { name: 'Nihari Potli Masala (Fennel, Dry Ginger, Mace)', amount: '4 tbsp' },
      { name: 'Mustard Oil / Ghee', amount: '3/4 cup' },
      { name: 'Garnish: Ginger, Lemon, Green Chilies', amount: 'As needed' }
    ],
    instructions: [
      'Heat ghee in a deep heavy pot and brown the beef shanks thoroughly.',
      'Add Nihari spice blend and 6 cups of water. Bring to a boil, then cover and simmer on very low heat for 3 to 4 hours until meat melts off the bone.',
      'Whisk roasted wheat flour into 2 cups water without lumps, slowly stir into the simmering broth to thicken.',
      'Simmer another 30 mins until red spiced oil (tari) rises to top. Serve garnished with crispy fried onions and lime.'
    ],
    comments: [],
    createdAt: '2026-06-15'
  },
  {
    id: 'pak-4',
    title: 'Shahi Haleem',
    cuisine: 'Pakistani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    prepTime: 45,
    cookTime: 120,
    calories: 580,
    difficulty: 'Hard',
    rating: 4.7,
    reviewsCount: 76,
    authorName: 'Amna Shah',
    description: 'A wholesome, nutritious blend of slow-cooked lentils, wheat, barley, and shredded beef pounded to a silky paste.',
    ingredients: [
      { name: 'Broken Wheat & Barley', amount: '1 cup soaked' },
      { name: 'Mixed Lentils (Chana, Moong, Masoor)', amount: '1 cup total' },
      { name: 'Boneless Beef or Mutton', amount: '600g' },
      { name: 'Haleem Spices', amount: '3 tbsp' },
      { name: 'Crispy Fried Onions (Barista)', amount: '1 cup' }
    ],
    instructions: [
      'Boil soaked wheat, barley, and mixed lentils until completely mushy.',
      'In a separate pot, cook beef with spices until tender enough to shred effortlessly.',
      'Combine shredded meat and cooked grains. Use a wooden hand masher (ghotna) or immersion blender to blend until stretchy and smooth.',
      'Temper with hot ghee and fried onions. Garnish with chaat masala, julienned ginger, and lemon wedges.'
    ],
    comments: [],
    createdAt: '2026-06-12'
  },
  {
    id: 'pak-5',
    title: 'Peshawari Chapli Kebab',
    cuisine: 'Pakistani',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 15,
    calories: 450,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 115,
    authorName: 'Khan Baba',
    description: 'Crispy spiced minced beef patties studded with crushed pomegranate seeds, coriander, and tomato slices.',
    ingredients: [
      { name: 'Minced Beef (with 20% fat)', amount: '500g' },
      { name: 'Maize Flour (Makai Ka Atta)', amount: '4 tbsp' },
      { name: 'Crushed Pomegranate Seeds (Anardana)', amount: '1.5 tbsp' },
      { name: 'Finely Chopped Tomatoes & Onions', amount: '1/2 cup each' },
      { name: 'Crushed Coriander & Cumin Seeds', amount: '1 tbsp' }
    ],
    instructions: [
      'Mix minced meat vigorously with spices, maize flour, chopped vegetables, and egg until sticky.',
      'Refrigerate for 30 minutes to hold shape.',
      'Wet your hands and form thin, wide patties. Press a thin tomato slice into the center of each.',
      'Shallow fry in hot oil or beef fat in a flat cast iron skillet until crisp outer crust forms.'
    ],
    comments: [],
    createdAt: '2026-06-10'
  },

  // --- ITALIAN RECIPES ---
  {
    id: 'ita-1',
    title: 'Classic Neapolitan Margherita Pizza',
    cuisine: 'Italian',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    prepTime: 40,
    cookTime: 10,
    calories: 590,
    difficulty: 'Medium',
    rating: 4.9,
    reviewsCount: 210,
    isFeatured: true,
    isTrending: true,
    authorName: 'Marco Rossi',
    description: 'The iconic Italian pizza with San Marzano tomato sauce, fresh buffalo mozzarella, fragrant basil leaves, and extra virgin olive oil.',
    ingredients: [
      { name: 'Tipo 00 Pizza Flour', amount: '400g' },
      { name: 'San Marzano Tomatoes', amount: '1 can crushed with salt' },
      { name: 'Fresh Buffalo Mozzarella', amount: '200g torn' },
      { name: 'Fresh Basil Leaves', amount: '1 handful' },
      { name: 'Extra Virgin Olive Oil', amount: '2 tbsp' }
    ],
    instructions: [
      'Prepare long-ferment dough using Tipo 00 flour, water, salt, and yeast. Rest for 24 hours.',
      'Stretch dough ball gently on a floured surface keeping the crust rim (cornicione) puffy.',
      'Spread crushed salted San Marzano tomatoes lightly in the center.',
      'Top with torn mozzarella and fresh basil leaves.',
      'Bake in a blazing hot pizza oven or preheated baking stone at 250°C (480°F) for 7-9 mins until blistered.'
    ],
    comments: [
      { id: 'ic1', userName: 'Elena V.', rating: 5, text: 'The secret really is the 00 flour and San Marzano tomatoes! Magnifico!', createdAt: '5 hours ago' }
    ],
    createdAt: '2026-06-22'
  },
  {
    id: 'ita-2',
    title: 'Authentic Roman Spaghetti Carbonara',
    cuisine: 'Italian',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 15,
    calories: 640,
    difficulty: 'Medium',
    rating: 4.8,
    reviewsCount: 164,
    isDailyRecommendation: true,
    authorName: 'Chef Giovanni',
    description: 'Creamy Roman pasta made with zero cream! Just crispy guanciale, Pecorino Romano cheese, fresh egg yolks, and black pepper.',
    ingredients: [
      { name: 'Spaghetti No. 5', amount: '400g' },
      { name: 'Guanciale (or Pancetta)', amount: '150g diced into batons' },
      { name: 'Fresh Egg Yolks + 1 Whole Egg', amount: '4 yolks + 1 egg' },
      { name: 'Pecorino Romano Cheese (grated)', amount: '1 cup' },
      { name: 'Freshly Cracked Black Pepper', amount: '2 tsp' }
    ],
    instructions: [
      'Boil spaghetti in salted water until 1 minute before al dente. Reserve 1 cup starchy pasta water.',
      'Crisp up diced guanciale in a cold skillet until fat renders out and pieces are golden.',
      'In a bowl, whisk egg yolks, whole egg, grated Pecorino Romano, and generous black pepper into a thick paste.',
      'Toss hot drained pasta into the skillet with guanciale off the heat.',
      'Pour egg mixture over pasta along with a splash of hot pasta water. Stir continuously off heat to create a silky emulsion without scrambling the eggs.'
    ],
    comments: [],
    createdAt: '2026-06-19'
  },
  {
    id: 'ita-3',
    title: 'Nonna Homemade Beef Lasagna',
    cuisine: 'Italian',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
    prepTime: 45,
    cookTime: 50,
    calories: 780,
    difficulty: 'Hard',
    rating: 4.9,
    reviewsCount: 189,
    authorName: 'Lucia Bianchi',
    description: 'Rich layers of slow-simmered Bolognese ragù, creamy velvety béchamel sauce, and melted Parmigiano-Reggiano.',
    ingredients: [
      { name: 'Lasagna Sheets', amount: '12 sheets' },
      { name: 'Beef & Pork Ragù Bolognese', amount: '4 cups' },
      { name: 'Homemade Béchamel Sauce (Butter, Flour, Milk, Nutmeg)', amount: '3 cups' },
      { name: 'Parmigiano-Reggiano & Mozzarella', amount: '2 cups grated' }
    ],
    instructions: [
      'Simmer classic Bolognese meat sauce with celery, carrot, onion, wine, and tomatoes for 2 hours.',
      'Prepare smooth white béchamel sauce seasoned with a pinch of nutmeg.',
      'In a baking dish, assemble repeating layers of meat ragù, pasta sheets, béchamel, and grated parmesan.',
      'Cover with foil and bake at 180°C for 30 mins, uncover and bake another 15 mins until bubbly golden crust forms.'
    ],
    comments: [],
    createdAt: '2026-06-14'
  },
  {
    id: 'ita-4',
    title: 'Wild Mushroom Risotto',
    cuisine: 'Italian',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 25,
    calories: 510,
    difficulty: 'Medium',
    rating: 4.7,
    reviewsCount: 88,
    authorName: 'Matteo Moretti',
    description: 'Creamy Arborio rice slowly toasted and stirred with porcini mushrooms, white wine, butter, and parmesan.',
    ingredients: [
      { name: 'Arborio or Carnaroli Rice', amount: '1.5 cups' },
      { name: 'Dried Porcini & Fresh Cremini Mushrooms', amount: '250g' },
      { name: 'Warm Chicken or Vegetable Broth', amount: '5 cups' },
      { name: 'Dry White Wine', amount: '1/2 cup' },
      { name: 'Cold Butter & Parmesan', amount: '3 tbsp each' }
    ],
    instructions: [
      'Sauté fresh mushrooms in olive oil and garlic; set aside.',
      'Toast rice with shallots in butter until translucent edges form. Deglaze with white wine.',
      'Add warm broth one ladle at a time, stirring constantly until liquid is absorbed before adding the next.',
      'Off heat, vigorously stir in cold butter cubes, parmesan, and sautéed mushrooms (mantecatura) for a wavy texture.'
    ],
    comments: [],
    createdAt: '2026-06-11'
  },
  {
    id: 'ita-5',
    title: 'Venetian Tiramisu',
    cuisine: 'Italian',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 0,
    calories: 460,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 312,
    isTrending: true,
    authorName: 'Sofia Conti',
    description: 'Delicate savoiardi ladyfingers dipped in rich espresso coffee layered with sweetened mascarpone cream and cocoa dust.',
    ingredients: [
      { name: 'Savoiardi Ladyfinger Biscuits', amount: '24 pieces' },
      { name: 'Mascarpone Cheese (room temp)', amount: '500g' },
      { name: 'Strong Espresso Coffee (cooled)', amount: '1.5 cups' },
      { name: 'Fresh Egg Yolks & Sugar', amount: '4 yolks + 100g sugar' },
      { name: 'Unsweetened Cocoa Powder', amount: '3 tbsp for dusting' }
    ],
    instructions: [
      'Whisk egg yolks and sugar over a double boiler until pale and creamy. Fold into softened mascarpone cheese.',
      'Quickly dip ladyfingers into cooled espresso (1 second per side so they stay structured).',
      'Arrange a layer of soaked ladyfingers in a glass dish, spread half the mascarpone cream over top.',
      'Repeat with second layer. Chill in refrigerator for at least 6 hours.',
      'Dust generously with dark cocoa powder right before serving.'
    ],
    comments: [],
    createdAt: '2026-06-08'
  },

  // --- ARABIC RECIPES ---
  {
    id: 'arb-1',
    title: 'Traditional Saudi Chicken Kabsa',
    cuisine: 'Arabic',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 40,
    calories: 620,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 130,
    isFeatured: true,
    authorName: 'Chef Youssef Al-Sayed',
    description: 'Aromatic one-pot rice feast spiced with dried black limes (loomi), cardamom, saffron, and tender roasted chicken.',
    ingredients: [
      { name: 'Long Grain Basmati Rice', amount: '2.5 cups' },
      { name: 'Whole Chicken halved', amount: '1 kg' },
      { name: 'Dried Black Limes (Loomi)', amount: '2 whole pierced' },
      { name: 'Baharat Arabic Spice Mix', amount: '2 tbsp' },
      { name: 'Raisins & Toasted Almonds', amount: '1/3 cup for garnish' },
      { name: 'Tomatoes & Bell Pepper', amount: '2 finely chopped' }
    ],
    instructions: [
      'Sauté onions, garlic, ginger, and whole spices (cardamom, cinnamon, loomi) in ghee.',
      'Add chicken halves skin down and sear golden. Add chopped tomatoes, bell peppers, and Baharat spice.',
      'Add 5 cups water and boil until chicken is cooked through. Lift chicken out and roast in oven at 200°C for crisp skin.',
      'Add rinsed basmati rice into the flavorful spiced broth. Cover and cook on low heat until tender.',
      'Mound rice on a large platter, top with crispy chicken, toasted almonds, and sweet golden raisins.'
    ],
    comments: [],
    createdAt: '2026-06-21'
  },
  {
    id: 'arb-2',
    title: 'Levantine Beef & Lamb Shawarma',
    cuisine: 'Arabic',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 20,
    calories: 540,
    difficulty: 'Medium',
    rating: 4.9,
    reviewsCount: 175,
    isTrending: true,
    authorName: 'Karim Haddad',
    description: 'Juicy, spice-marinated sliced beef strips pan-roasted until caramelized, served inside warm pita with tahini tarator sauce.',
    ingredients: [
      { name: 'Beef Sirloin or Lamb Shoulder', amount: '700g thinly sliced' },
      { name: 'Shawarma Spice (Allspice, Cumin, Cardamom, Garlic)', amount: '3 tbsp' },
      { name: 'Vinegar & Lemon Juice', amount: '3 tbsp' },
      { name: 'Tahini Sauce (Tahini, Garlic, Lemon)', amount: '1/2 cup' },
      { name: 'Pickled Turnips & Lebanese Pita', amount: 'For wrapping' }
    ],
    instructions: [
      'Marinate beef strips with olive oil, vinegar, lemon, crushed garlic, and shawarma spices overnight.',
      'Heat a cast-iron skillet until smoking. Sear meat in batches without crowding so it caramelizes rather than steams.',
      'Warm Lebanese pita breads on a flame.',
      'Spread creamy garlic tahini sauce, pile hot shawarma meat, sumac onions, fresh parsley, and pink pickled turnips. Roll tightly.'
    ],
    comments: [],
    createdAt: '2026-06-17'
  },
  {
    id: 'arb-3',
    title: 'Velvety Creamy Hummus bi Tahina',
    cuisine: 'Arabic',
    image: 'https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 10,
    calories: 280,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 95,
    authorName: 'Layla Mansour',
    description: 'Ultra-smooth chickpea dip whipped with rich sesame tahini, fresh lemon juice, garlic, and extra virgin olive oil.',
    ingredients: [
      { name: 'Cooked Chickpeas (skins peeled for extra smoothness)', amount: '2 cups' },
      { name: 'Raw Tahini Paste', amount: '1/2 cup' },
      { name: 'Ice Cold Water / Ice Cubes', amount: '4 tbsp' },
      { name: 'Fresh Lemon Juice & Garlic', amount: '1 lemon + 2 cloves' },
      { name: 'Garnish: Whole Chickpeas, Sumac, Olive Oil', amount: 'As needed' }
    ],
    instructions: [
      'In a food processor, blend lemon juice and garlic with tahini and salt until fluffy and white.',
      'Add warm peeled chickpeas and ice-cold water. Blend continuously for 4-5 minutes until cloud-like and silky.',
      'Swoop onto a shallow plate creating a circular well with back of your spoon.',
      'Pool premium extra virgin olive oil into the well, sprinkle with paprika or sumac and warm pine nuts.'
    ],
    comments: [],
    createdAt: '2026-06-13'
  },
  {
    id: 'arb-4',
    title: 'Crispy Herbed Falafel',
    cuisine: 'Arabic',
    image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 10,
    calories: 320,
    difficulty: 'Medium',
    rating: 4.7,
    reviewsCount: 112,
    authorName: 'Rami Al-Khatib',
    description: 'Golden crunchy fritters made from raw soaked chickpeas, fresh coriander, parsley, and aromatic spices.',
    ingredients: [
      { name: 'Dry Chickpeas (soaked 24 hrs - DO NOT BOIL)', amount: '2 cups' },
      { name: 'Fresh Parsley, Coriander & Mint', amount: '1 packed cup total' },
      { name: 'Onion & Garlic Cloves', amount: '1 small onion + 4 cloves' },
      { name: 'Cumin, Coriander & Sesame Seeds', amount: '1.5 tbsp' }
    ],
    instructions: [
      'Pulse soaked raw chickpeas with fresh herbs, onion, garlic, and dry spices in a food processor until a coarse meal forms.',
      'Refrigerate mixture for 1 hour so starches bind.',
      'Scoop into balls using a falafel scoop or spoon, sprinkle sesame seeds on outer crust.',
      'Deep fry in hot oil (175°C) for 3 to 4 mins until deep emerald green inside and golden brown crunch outside.'
    ],
    comments: [],
    createdAt: '2026-06-09'
  },
  {
    id: 'arb-5',
    title: 'Nablus Cheese Kunafa',
    cuisine: 'Arabic',
    image: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 20,
    calories: 490,
    difficulty: 'Medium',
    rating: 4.9,
    reviewsCount: 240,
    isTrending: true,
    authorName: 'Hana Al-Nabulsi',
    description: 'Crispy shredded kataifi pastry baked with gooey stretchy sweet cheese, drenched in orange blossom sugar syrup.',
    ingredients: [
      { name: 'Kataifi Shredded Dough', amount: '400g' },
      { name: 'Akkawi Cheese (desalted) or Sweet Mozzarella', amount: '350g' },
      { name: 'Melted Ghee or Butter', amount: '3/4 cup' },
      { name: 'Sugar Syrup infused with Rose & Orange Blossom', amount: '1.5 cups' },
      { name: 'Crushed Emerald Pistachios', amount: '1/2 cup' }
    ],
    instructions: [
      'Chop kataifi pastry finely and massage thoroughly with melted ghee and orange food color.',
      'Press half the buttered dough firmly into the bottom of a round copper pan.',
      'Layer desalted stretchy Akkawi cheese evenly over dough leaving a 1cm border.',
      'Cover with remaining pastry. Bake at 200°C for 20 mins until crisp bottom.',
      'Invert pan onto serving platter. Immediately pour warm fragrant syrup over sizzling kunafa. Top with crushed pistachios.'
    ],
    comments: [],
    createdAt: '2026-06-05'
  },

  // --- THAI RECIPES ---
  {
    id: 'tha-1',
    title: 'Street Style Shrimp Pad Thai',
    cuisine: 'Thai',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 10,
    calories: 520,
    difficulty: 'Medium',
    rating: 4.9,
    reviewsCount: 198,
    isFeatured: true,
    isDailyRecommendation: true,
    authorName: 'Chef Somchai',
    description: 'Stir-fried rice noodles balancing sweet, sour, and savory flavors with tamarind paste, crushed peanuts, fresh bean sprouts, and tiger prawns.',
    ingredients: [
      { name: 'Flat Rice Noodles', amount: '250g soaked warm water' },
      { name: 'Fresh Tiger Prawns', amount: '12 peeled' },
      { name: 'Tamarind Concentrate, Fish Sauce & Palm Sugar', amount: '3 tbsp each' },
      { name: 'Eggs & Extra Firm Tofu', amount: '2 eggs + 100g diced tofu' },
      { name: 'Bean Sprouts, Chinese Chives & Crushed Peanuts', amount: '1 handful each' }
    ],
    instructions: [
      'Whisk tamarind concentrate, fish sauce, and palm sugar in a bowl to make the authentic sauce.',
      'Stir fry prawns and diced tofu in hot wok until pink; push to side of wok.',
      'Crack eggs into wok and scramble until lightly set.',
      'Add drained soaked noodles and Pad Thai sauce. Toss over roaring flame until noodles absorb sauce and char slightly.',
      'Fold in fresh bean sprouts and chives. Serve garnished with crushed roasted peanuts and lime.'
    ],
    comments: [],
    createdAt: '2026-06-23'
  },
  {
    id: 'tha-2',
    title: 'Fragrant Thai Green Curry',
    cuisine: 'Thai',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 20,
    calories: 480,
    difficulty: 'Medium',
    rating: 4.8,
    reviewsCount: 145,
    isTrending: true,
    authorName: 'Nongkran Chai',
    description: 'Creamy coconut curry simmered with homemade fresh green chili paste, Thai eggplants, kaffir lime leaves, and sweet basil.',
    ingredients: [
      { name: 'Thick Coconut Milk', amount: '1 can (400ml)' },
      { name: 'Green Curry Paste (Green Chilies, Galangal, Lemongrass)', amount: '3 tbsp' },
      { name: 'Sliced Chicken Breast or Thighs', amount: '500g' },
      { name: 'Thai Pea Eggplants & Bamboo Shoots', amount: '1 cup' },
      { name: 'Kaffir Lime Leaves & Sweet Thai Basil', amount: '1 handful' }
    ],
    instructions: [
      'Fry thick coconut cream in a pot until oil separates.',
      'Add green curry paste and sauté for 3 mins until intensely fragrant and vibrant green.',
      'Add chicken pieces and toss until coated.',
      'Pour remaining coconut milk and 1 cup water. Add Thai eggplants and simmer until tender.',
      'Season with fish sauce and palm sugar. Off heat, fold in torn kaffir lime leaves and fresh Thai basil.'
    ],
    comments: [],
    createdAt: '2026-06-16'
  },
  {
    id: 'tha-3',
    title: 'Hot & Sour Tom Yum Goong Soup',
    cuisine: 'Thai',
    image: 'https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 15,
    calories: 220,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 167,
    authorName: 'Siriporn P.',
    description: 'Bold, invigorating broth bursting with aromatic lemongrass, galangal, bird eye chilies, lime juice, and plump shrimp.',
    ingredients: [
      { name: 'Shrimp Head Broth or Chicken Stock', amount: '4 cups' },
      { name: 'Lemongrass Stalks (bruised)', amount: '3 stalks' },
      { name: 'Galangal Root sliced & Kaffir Lime Leaves', amount: '6 slices + 5 leaves' },
      { name: 'Fresh Jumbo Shrimp', amount: '300g' },
      { name: 'Thai Nam Prik Pao (Chili Jam) & Lime Juice', amount: '2 tbsp each' }
    ],
    instructions: [
      'Bring stock to a boil with bruised lemongrass, sliced galangal, shallots, and torn kaffir lime leaves for 8 mins.',
      'Add straw mushrooms and Thai chili jam (Nam Prik Pao).',
      'Add fresh shrimp and cook just 2-3 minutes until pink and plump.',
      'Turn off heat completely before adding fresh lime juice and fish sauce (boiling lime juice turns bitter). Garnish with coriander.'
    ],
    comments: [],
    createdAt: '2026-06-07'
  },
  {
    id: 'tha-4',
    title: 'Sweet Mango Sticky Rice (Khao Niao Mamuang)',
    cuisine: 'Thai',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 25,
    calories: 410,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 225,
    isTrending: true,
    authorName: 'Ananya Thong',
    description: 'Steamed glutinous sweet rice infused with salted coconut cream served alongside ripe juicy golden Nam Dok Mai mangoes.',
    ingredients: [
      { name: 'Thai Glutinous Sticky Rice', amount: '1.5 cups (soaked 6 hrs)' },
      { name: 'Thick Coconut Cream', amount: '1.5 cups' },
      { name: 'Palm Sugar & Sea Salt', amount: '1/2 cup sugar + 1 tsp salt' },
      { name: 'Ripe Sweet Yellow Mangoes', amount: '2 sliced' },
      { name: 'Crispy Mung Bean Beans (toasted)', amount: '1 tbsp for crunch' }
    ],
    instructions: [
      'Steam soaked glutinous rice in a bamboo steamer basket for 20-25 mins until translucent and chewy.',
      'Warm coconut cream with palm sugar and sea salt until dissolved.',
      'Gently fold 3/4 of the warm sweet coconut sauce into the freshly steamed sticky rice. Cover and rest 20 mins to absorb.',
      'Plate sweet sticky rice next to sliced golden mangoes. Drizzle remaining coconut sauce and top with crispy mung beans.'
    ],
    comments: [],
    createdAt: '2026-06-03'
  },
  {
    id: 'tha-5',
    title: 'Spicy Thai Basil Chicken (Pad Kra Pao)',
    cuisine: 'Thai',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 8,
    calories: 460,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 154,
    authorName: 'Chef Chaiwat',
    description: 'The quintessential Thai comfort fast-food! Minced chicken stir fried with holy basil and fiery chilies, topped with a crispy fried egg.',
    ingredients: [
      { name: 'Coarsely Minced Chicken or Pork', amount: '400g' },
      { name: 'Thai Holy Basil (Kra Pao)', amount: '1 large handful' },
      { name: 'Bird Eye Chilies & Garlic cloves (pounded)', amount: '6 chilies + 5 cloves' },
      { name: 'Oyster Sauce, Soy Sauce & Black Soy Sauce', amount: '1 tbsp each' },
      { name: 'Duck Egg or Hen Egg (for frying crispy fried egg)', amount: '2' }
    ],
    instructions: [
      'Pound garlic and bird eye chilies in a mortar and pestle into a rough aromatic paste.',
      'Fry duck egg in roaring hot oil until edges are blistered and yolk is runny (Kai Jeow style); set aside.',
      'Sauté chili garlic paste in wok for 30 seconds. Add minced chicken and break up with spatula on high flame.',
      'Toss with oyster sauce, light soy, and dark sweet soy.',
      'Kill heat and toss in fresh Holy basil leaves until wilted. Serve over jasmine rice topped with the crispy egg.'
    ],
    comments: [],
    createdAt: '2026-06-01'
  }
];

export const INITIAL_EXPERIENCES: KitchenExperience[] = [
  {
    id: 'exp-1',
    authorName: 'Aisha Malik',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    recipeTitle: 'Authentic Sindhi Biryani',
    title: 'My First Time Cooking Dum Biryani for Family Reunion!',
    story: 'I was so nervous making Biryani for 15 guests! Followed Chef Fatima recipe down to the exact saffron milk dumpling step. When I opened the foil lid after 20 mins of dum, the steam smelled like a royal palace in Karachi. Everyone took second helpings!',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    likesCount: 64,
    commentsCount: 12,
    createdAt: '3 hours ago',
    comments: [
      { id: 'ec1', userName: 'Chef Fatima Ali', text: 'Looks absolutely stunning Aisha! The rice grains are so distinct.', createdAt: '1 hour ago' },
      { id: 'ec2', userName: 'Omar D.', text: 'Making me hungry! Did you use mutton or chicken?', createdAt: '30 mins ago' }
    ]
  },
  {
    id: 'exp-2',
    authorName: 'Luca De Santis',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    recipeTitle: 'Classic Neapolitan Margherita Pizza',
    title: 'Built an Outdoor Pizza Oven just for Neapolitan Crusts',
    story: 'After visiting Naples last summer, standard kitchen ovens just did not cut it anymore. Spent three weekends building this brick wood-fired oven in my backyard. 480°C heat cooked this Margherita in literally 65 seconds! The leopard spotting on the crust is surreal.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    likesCount: 128,
    commentsCount: 24,
    createdAt: 'Yesterday',
    comments: [
      { id: 'ec3', userName: 'Dave Miller', text: 'That leopard spotting is goals! What hydration % did you use?', createdAt: '12 hours ago' }
    ]
  },
  {
    id: 'exp-3',
    authorName: 'Nadia Al-Hassan',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    recipeTitle: 'Nablus Cheese Kunafa',
    title: 'Midnight Sweet Craving: Sizzling Kunafa success',
    story: 'Could not find desalted Akkawi cheese in my local grocery store, so I used a 50/50 mix of fresh sweet mozzarella and ricotta. Baked it in a skillet over stove burner rotating it constantly. The sugar syrup sizzle sound when flipped was pure ASMR.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    likesCount: 89,
    commentsCount: 8,
    createdAt: '2 days ago',
    comments: []
  },
  {
    id: 'exp-4',
    authorName: 'Kenji Sato',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    recipeTitle: 'Street Style Shrimp Pad Thai',
    title: 'Mastering Wok Hei on a Home Gas Stove',
    story: 'The trick to real Pad Thai is high BTU output and never overcrowding the wok. I soaked the rice noodles in warm water instead of boiling them—game changer! No clumping at all. Added extra toasted peanuts and garlic chives.',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    likesCount: 45,
    commentsCount: 5,
    createdAt: '3 days ago',
    comments: []
  }
];

export const INITIAL_BADGES: Badge[] = [
  { id: 'b1', name: 'Global Taster', description: 'Explore recipes from 4 different world cuisines', icon: 'Globe', unlocked: true },
  { id: 'b2', name: 'Master Chef', description: 'Save at least 5 recipes to your kitchen collection', icon: 'ChefHat', unlocked: true },
  { id: 'b3', name: 'Storyteller', description: 'Share your first kitchen experience story with photos', icon: 'Camera', unlocked: true },
  { id: 'b4', name: 'Spice Explorer', description: 'Cook a recipe with difficulty level Hard', icon: 'Flame', unlocked: false, progress: '0 / 1' },
  { id: 'b5', name: 'Recipe Creator', description: 'Upload your own unique heritage family recipe', icon: 'Utensils', unlocked: false, progress: '0 / 1' },
  { id: 'b6', name: 'Community Star', description: 'Receive over 50 likes on your kitchen posts', icon: 'Award', unlocked: true }
];

export const POPULAR_CATEGORIES = [
  {
    name: 'Pakistani',
    subtitle: 'Rich spices & slow-cooked feasts',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80',
    recipesCount: '5 Recipes',
    accentColor: 'from-amber-600 to-orange-700'
  },
  {
    name: 'Italian',
    subtitle: 'Artisanal pasta & wood-fired pizza',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=500&q=80',
    recipesCount: '5 Recipes',
    accentColor: 'from-red-600 to-rose-700'
  },
  {
    name: 'Arabic',
    subtitle: 'Aromatic Levantine & Gulf delicacies',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=500&q=80',
    recipesCount: '5 Recipes',
    accentColor: 'from-emerald-600 to-teal-800'
  },
  {
    name: 'Thai',
    subtitle: 'Vibrant sweet, sour & spicy harmony',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=500&q=80',
    recipesCount: '5 Recipes',
    accentColor: 'from-orange-500 to-red-600'
  }
];
