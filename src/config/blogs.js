const BLOGS = [
    {
      id: 1,
      img: "https://i.pinimg.com/474x/2b/54/af/2b54afe9bf20b641e9e579f6d8561dc1.jpg",
      title: "Demon Slayer",
      description: "Demon Slayer follows Tanjiro Kamado, a young boy whose family is slaughtered by demons, leaving his sister Nezuko as the only survivor, now turned into a demon herself. Tanjiro joins the Demon Slayer Corps to seek vengeance and find a cure for his sister.",
      category: "/anime",
      images: [
        "https://i.pinimg.com/236x/4f/4f/a1/4f4fa17cbe65bdace4503018f34cfea6.jpg",
        "https://i.pinimg.com/236x/1d/0e/12/1d0e122e8003e5da0bb5a4d4774b5ee7.jpg",
        "https://i.pinimg.com/236x/ed/a0/97/eda097fcbd44b9f3ca56b408d96b3f55.jpg"
      ]
    },
    {
      id: 2,
      img: "https://i.pinimg.com/236x/be/a1/a7/bea1a77e395dc04f5e12786e77caa6b2.jpg",
      title: "Jujutsu Kaisen",
      description: "Yuji Itadori, a high school student, joins the Tokyo Metropolitan Magic Technical College to fight against curses after consuming a cursed object. He works with Satoru Gojo and others to defeat powerful curses threatening the world.",
      category: "/anime",
      images: [
        "https://i.pinimg.com/236x/f3/7a/02/f37a02e66e85332e80b8c971401be8e3.jpg",
        "https://i.pinimg.com/236x/a0/5b/2d/a05b2d7a6bb447f4b1bcd4c907e2e8cc.jpg",
        "https://i.pinimg.com/236x/55/d0/f5/55d0f5637631771c38c5b0f89c576207.jpg"
      ]
    },
    {
      id: 3,
      img: "https://i.pinimg.com/236x/0c/25/be/0c25be614595a6066e18fc72fe1669ab.jpg",
      title: "Attack on Titan",
      description: "In a world where humanity is on the brink of extinction due to giant humanoid creatures called Titans, Eren Yeager, his adoptive sister Mikasa, and their friend Armin fight for survival in this dark and gritty tale of betrayal and sacrifice.",
      category: "/anime/attack-on-titan",
      images: [
        "https://i.pinimg.com/236x/0e/11/6b/0e116b04380175d7f39b7737e9ca2e27.jpg",
        "https://i.pinimg.com/236x/af/c5/0e/afc50e620f792ba8a7ad8791069db400.jpg",
        "https://i.pinimg.com/236x/51/c7/d4/51c7d46779b86a33a4b1a5978c9de006.jpg"
      ]
    },
    {
      id: 4,
      img: "https://i.pinimg.com/236x/3a/8c/63/3a8c63737ae2d94f9d4f09f477e3df34.jpg ",
      title: "Naruto",
      description: "Naruto Uzumaki, a young ninja with dreams of becoming the strongest and the leader of his village, faces challenges from his past, rivals, and enemies as he strives for peace and recognition.",
      category: "/anime",
      images: [
        "https://i.pinimg.com/236x/33/d6/0c/33d60c541dbf23a28cf9ff4137fa8c10.jpg",
        "https://i.pinimg.com/236x/f8/a7/73/f8a7735d5e0a2a13ab10bfe50e44d1f2.jpg",
        "https://i.pinimg.com/236x/28/6d/56/286d56be1f42bff9db86dbb93059bc52.jpg"
      ]
    },
    {
      id: 5,
      img: "https://i.pinimg.com/236x/31/8a/7b/318a7b3044cde5cd0581ef80611bf6f5.jpg",
      title: "One Piece",
      description: "Monkey D. Luffy and his diverse pirate crew sail across the Grand Line in search of the ultimate treasure, the One Piece, to become the next King of the Pirates. The series explores themes of friendship, adventure, and dreams.",
      category: "/anime",
      images: [
        "https://i.pinimg.com/236x/42/70/cf/4270cf4601bc4b33013b542212b9e2b5.jpg",
        "https://i.pinimg.com/236x/fb/2f/99/fb2f995b02c7a2b237ea0b8329c26845.jpg",
        "https://i.pinimg.com/236x/e7/69/f1/e769f1de56adac75ca3b82749817a24d.jpg"
      ]
    },
    {
      id: 6,
      img: "https://i.pinimg.com/236x/9e/ba/ea/9ebaea63fa887f99e9c60741220a532a.jpg",
      title: "Black Clover",
      description: "Asta, born without magic in a world where magic is everything, aims to become the Wizard King. Alongside his rival Yuno, who is incredibly skilled in magic, Asta works hard to achieve his dream, facing numerous challenges.",
      category: "/anime",
      images: [
        "https://i.pinimg.com/236x/fd/f7/71/fdf7718be8b8250c91b850d9087ecddf.jpg",
        "https://i.pinimg.com/236x/47/c4/02/47c4029e6c1ac557831e7c8b76cb0a85.jpg",
        "https://i.pinimg.com/236x/6e/62/6e/6e626ee0843f09b92e7e07e0b77bcaf0.jpg"
      ]
    },
    {
      id: 7,
      img: "https://i.pinimg.com/236x/11/39/04/113904955b3b97b236cd3a82a498321d.jpg",
      title: "Fullmetal Alchemist: Brotherhood",
      description: "Edward and Alphonse Elric, two brothers, seek the Philosopher's Stone to restore their bodies after a failed alchemical experiment. Their journey takes them through a world of war, corruption, and personal sacrifice.",
      category: "/anime",
      images: [
        "https://i.pinimg.com/236x/4f/ef/7a/4fef7a9de9d54a9f6228396a15f01556.jpg",
        "https://i.pinimg.com/236x/98/35/34/983534f5280cf63ac98b8cdcb50a29e9.jpg",
        "https://i.pinimg.com/236x/cc/a7/51/cca75140e5018c6e8b7643478f4c9b18.jpg"
      ]
    },
    {
      id: 8,
      img: "https://i.pinimg.com/236x/39/90/d9/3990d9a269712084403bd71e4a07563c.jpg",
      title: "Tokyo Ghoul",
      description: "Ken Kaneki, a half-ghoul, struggles to live between two worlds—the human world and the ghoul world—while trying to maintain his humanity. His journey of survival leads him to join the fight against powerful ghouls.",
      category: "/anime",
      images: [
        "https://i.pinimg.com/236x/d1/6c/61/d16c616106ab198287c7d3b87a15e6ab.jpg",
        "https://i.pinimg.com/236x/4e/0b/35/4e0b35e9037f0387de64d3015433c3c9.jpg",
        "https://i.pinimg.com/236x/61/a7/69/61a7691715b623d1c58d83ff6f4a1fa3.jpg"
      ]
    },
    {
      id: 9,
      img: "https://i.pinimg.com/236x/ac/e9/77/ace9779153b6783f6d01a1d34ce688a0.jpg",
      title: "My Hero Academia",
      description: "In a world where almost everyone has superpowers, Izuku Midoriya, a powerless boy, dreams of becoming the greatest hero. His journey begins when he inherits the powerful Quirk of the world's greatest hero, All Might.",
      category: "/anime",
      images: [
        "https://i.pinimg.com/236x/10/57/0b/10570b84e6b13f32e767443401c0458e.jpg",
        "https://i.pinimg.com/236x/c7/f2/2f/c7f22f48bdbfd171625ba4e9db496b7d.jpg",
        "https://i.pinimg.com/236x/c9/8f/75/c98f751599971b01a513c274560443eb.jpg"
      ]
    },
    {
      id: 10,
      img: "https://i.pinimg.com/236x/2a/a3/84/2aa38438c4306d183191d758d181f498.jpg",
      title: "Dragon Ball Z",
      description: "Goku, a powerful warrior, fights to protect Earth from powerful foes like Frieza, Cell, and Majin Buu. His journey to unlock new levels of strength and his transformation into a Super Saiyan is legendary.",
      category: "/anime",
      images: [
        "https://i.pinimg.com/236x/da/1a/c2/da1ac26ffb1c0c81e0cf1ed3be86e69e.jpg",
        "https://i.pinimg.com/236x/7d/91/34/7d9134f2dbd41fbd502fffd5b1d7d18b.jpg",
        "https://i.pinimg.com/236x/e5/34/d1/e534d1a4108c45197b82c34a83fce3a1.jpg"
      ]
    },
    {
        id: 20,
        img: "https://i.pinimg.com/236x/c4/99/21/c49921a09e1430ddba3b5a9a021e3234.jpg",
        title: "Super Mario Bros.",
        description: "Join Mario and his friends as they navigate through the Mushroom Kingdom to rescue Princess Peach from the evil Bowser. The iconic platformer game features exciting adventures, challenging levels, and power-ups.",
        category: "/gaming",
        images: [
          "https://i.pinimg.com/236x/da/1a/c2/da1ac26ffb1c0c81e0cf1ed3be86e69e.jpg",
          "https://i.pinimg.com/236x/7d/91/34/7d9134f2dbd41fbd502fffd5b1d7d18b.jpg",
          "https://i.pinimg.com/236x/e5/34/d1/e534d1a4108c45197b82c34a83fce3a1.jpg"
        ]
      },
      {
        id: 21,
        img: "https://i.pinimg.com/474x/7a/86/81/7a868198ac7f516cd4a9b7bef2d721e2.jpg",
        title: "The Legend of Zelda",
        description: "Link embarks on a journey to rescue Princess Zelda and defeat the evil Ganon to save the kingdom of Hyrule. The action-adventure game features exploration, puzzle-solving, and sword combat in a vast open world.",
        category: "/gaming",
        images: [
          "https://i.pinimg.com/236x/c9/5a/94/c95a949ed4f09ffdf3da3b073e1e9f1d.jpg",
          "https://i.pinimg.com/236x/d8/35/74/d8357458c28f57a3482c76d5b6f91a4f.jpg",
          "https://i.pinimg.com/236x/98/0b/ae/980bae55b1bb620cb0a17f9f9f41b404.jpg"
        ]
      },
      {
        id: 22,
        img: "https://i.pinimg.com/474x/81/20/28/812028c2e38d629f6fc062930ec23869.jpg",
        title: "Minecraft",
        description: "Minecraft allows players to explore and build in a blocky 3D world, gathering resources, crafting tools, and facing off against mobs. It features both survival and creative modes for limitless gameplay.",
        category: "/gaming",
        images: [
          "https://i.pinimg.com/236x/2e/fe/c5/2efec518d6f68d51a9f3b255708ac3fd.jpg",
          "https://i.pinimg.com/236x/ed/12/47/ed1247fe5d1fd3c8a6f7b67d48f5f98b.jpg",
          "https://i.pinimg.com/236x/73/f4/33/73f43356e6ea97c7df7cf2a02bb01a62.jpg"
        ]
      },
      {
        id: 23,
        img: "https://i.pinimg.com/236x/7e/e8/c4/7ee8c4361736ed806711ae99f7d6762c.jpg",
        title: "Fortnite",
        description: "Fortnite is a fast-paced battle royale game where players compete to be the last one standing. Featuring creative building mechanics, engaging combat, and regular events, it's a favorite in the competitive gaming world.",
        category: "/gaming",
        images: [
          "https://i.pinimg.com/236x/c6/0a/6f/c60a6f3805c4efb9072fc982eb7623d9.jpg",
          "https://i.pinimg.com/236x/2a/7b/5c/2a7b5c4c3788a9f5b1fe233c0d407ed2.jpg",
          "https://i.pinimg.com/236x/f8/4f/fd/f84ffd9530a59a6c23462efb5307fc5c.jpg"
        ]
      },
      {
        id: 24,
        img: "https://i.pinimg.com/474x/c6/32/58/c63258efbc4525926145c5104b696542.jpg",
        title: "Call of Duty: Modern Warfare",
        description: "Call of Duty: Modern Warfare is a first-person shooter game that offers a gripping campaign and multiplayer experience. Players engage in high-stakes combat missions while upgrading weapons and tactics.",
        category: "/gaming",
        images: [
          "https://i.pinimg.com/236x/cb/7b/76/cb7b7623b9f1d53841012f65ad1e4dff.jpg",
          "https://i.pinimg.com/236x/1f/9c/91/1f9c91e07b988b43b5103d4e09da72b9.jpg",
          "https://i.pinimg.com/236x/65/91/ba/6591baad0eae2644a7886e3421a3858d.jpg"
        ]
      },
      {
        id: 25,
        img: "https://i.pinimg.com/236x/a6/46/50/a64650aa92fbed21b4a8ef7a66513894.jpg",
        title: "Apex Legends",
        description: "Apex Legends is a battle royale game where players choose from a roster of unique characters with special abilities, competing to be the last team standing in a fast-paced and ever-changing environment.",
        category: "/gaming",
        images: [
          "https://i.pinimg.com/236x/34/0b/c7/340bc7d3eafeb26d410438bd4c9a5b1c.jpg",
          "https://i.pinimg.com/236x/4e/d6/ab/4ed6ab6e95f457405a470687f7d2b77a.jpg",
          "https://i.pinimg.com/236x/c7/96/22/c796229f83db4a22a9d2a2e44ebbb508.jpg"
        ]
      },
      {
        id: 26,
        img: "https://i.pinimg.com/236x/54/e6/92/54e6921edc25613da3a5d05554df7b83.jpg",
        title: "Overwatch",
        description: "Overwatch is a team-based multiplayer first-person shooter game where players choose from a diverse cast of heroes, each with unique abilities, to fight in objective-based maps with fast-paced combat.",
        category: "/gaming",
        images: [
          "https://i.pinimg.com/236x/a1/9a/8e/a19a8e3586033851d00ba7f10c1c75b8.jpg",
          "https://i.pinimg.com/236x/cb/cd/4e/cbcd4e8be1b3789a7a7fd83d7f4f462f.jpg",
          "https://i.pinimg.com/236x/f5/75/13/f575132b4b6466724ac4f93fe5597bb6.jpg"
        ]
      },
      {
        id: 27,
        img: "https://i.pinimg.com/236x/b7/fb/81/b7fb81dfc8a7e6079a1430fdd482931c.jpg",
        title: "Resident Evil Village",
        description: "Resident Evil Village is a survival horror game where players must navigate a terrifying village filled with monstrous enemies, puzzles, and mysteries as they try to uncover the truth behind the events.",
        category: "/gaming",
        images: [
          "https://i.pinimg.com/236x/9f/64/cf/9f64cf7fe85d9d0d16c5b54ebc4b8b8d.jpg",
          "https://i.pinimg.com/236x/5e/5f/7f/5e5f7f57f9d89a8f91172a0eaedb8647.jpg",
          "https://i.pinimg.com/236x/88/d3/f1/88d3f1ebfc8d0733d6b8d4b3920bde30.jpg"
        ]
      },
      {
        id: 28,
        img: "https://i.pinimg.com/236x/d0/12/b0/d012b0a7d354f80e1c09724e95b6967e.jpg",
        title: "Cyberpunk 2077",
        description: "Cyberpunk 2077 is an open-world RPG set in a dystopian future where players take on the role of V, a mercenary in the neon-lit city of Night City. The game offers rich storytelling and deep customization options.",
        category: "/gaming",
        images: [
          "https://i.pinimg.com/236x/8f/8f/7e/8f8f7e1a920b27f121d3d2701f50370c.jpg",
          "https://i.pinimg.com/236x/2f/ff/14/2fff144b531d1b663fa29ec529dcd0b6.jpg",
          "https://i.pinimg.com/236x/63/85/6f/63856f800ce9e70827657bb1046709b1.jpg"
        ]
      },
      {
        id: 40,
        img: "https://i.pinimg.com/236x/b0/c2/17/b0c217094d961f8e6ed4e37b18c06b94.jpg",
        title: "Breaking News",
        description: "Stay up-to-date with the latest breaking news from around the world. Our coverage includes politics, business, technology, and more to keep you informed about current events.",
        category: "/news",
        images: [
          "https://i.pinimg.com/236x/c5/4e/c1/c54ec1da2f937433735c65ccedfae1d4.jpg",
          "https://i.pinimg.com/236x/d7/32/52/d7325207a038fd219550d4b7cbfc4383.jpg",
          "https://i.pinimg.com/236x/3e/a2/d0/3ea2d08d98b029ee700201726232519d.jpg"
        ]
      },
      {
        id: 41,
        img: "https://i.pinimg.com/236x/1c/01/67/1c0167af77325ccded4adf0f405e03ef.jpg",
        title: "Tech News",
        description: "Get the latest updates on technology, including news about gadgets, software, and breakthroughs in the tech world. Stay informed about the innovations shaping our future.",
        category: "/news",
        images: [
          "https://i.pinimg.com/236x/f8/af/ff/f8afff44e38569a2cbeff1bc745bc0bc.jpg",
          "https://i.pinimg.com/236x/21/58/4b/21584b18c3d36dbd3f8f89ef99cc9d35.jpg",
          "https://i.pinimg.com/236x/1b/97/9e/1b979e70422108f14d4e238aa3ae33a1.jpg"
        ]
      },
      {
        id: 42,
        img: "https://i.pinimg.com/236x/06/fc/9a/06fc9a76ab26ac64257dd3013c140095.jpg",
        title: "World Politics",
        description: "Keep track of the latest developments in global politics with news on elections, government actions, and international relations. Understand how political events affect the world.",
        category: "/news",
        images: [
          "https://i.pinimg.com/236x/14/a1/28/14a12812de179f689d1c107f5fe52db0.jpg",
          "https://i.pinimg.com/236x/d2/19/0b/d2190b9da5a6eb7b56a3e7fa15f29be0.jpg",
          "https://i.pinimg.com/236x/af/d9/cb/afd9cb8f4d70d3880b760c79f9aee9b0.jpg"
        ]
      },
      {
        id: 43,
        img: "https://i.pinimg.com/474x/82/5d/94/825d94c779415ad5aa69675b3f8c0636.jpg",
        title: "Health & Wellness",
        description: "Stay informed with the latest health news, trends in wellness, fitness, nutrition, and mental health tips to help you lead a balanced and healthy life.",
        category: "/news",
        images: [
          "https://i.pinimg.com/236x/c7/38/6e/c7386e9bcfdb5ec22d19b97b58568a6f.jpg",
          "https://i.pinimg.com/236x/02/5a/7b/025a7bfb90d91a6c2469ff9274f57687.jpg",
          "https://i.pinimg.com/236x/2b/4b/d2/2b4bd2138d77fc6351601577a929349e.jpg"
        ]
      },
      {
        id: 44,
        img: "https://i.pinimg.com/236x/6f/79/63/6f79639297188a82d4c640421e28c8d9.jpg",
        title: "Economy & Finance",
        description: "Stay updated with the latest economic news, stock market trends, financial reports, and investment tips that help you understand the global financial landscape.",
        category: "/news",
        images: [
          "https://i.pinimg.com/236x/6f/79/63/6f79639297188a82d4c640421e28c8d9.jpg",
          "https://i.pinimg.com/236x/3b/4e/f6/3b4ef66a7fdc54e974547d2a8b42a35e.jpg",
          "https://i.pinimg.com/236x/c4/cf/61/c4cf61d4ec9dbfbe94e7f64a68a8eeb7.jpg"
        ]
      },
      {
        id: 45,
        img: "https://i.pinimg.com/236x/90/91/a4/9091a4a56b20215b96c7c4b7a6e10592.jpg",
        title: "Sports News",
        description: "Get the latest updates on sports events, scores, and news about teams and players. Whether it’s football, basketball, or tennis, stay up to date with the world of sports.",
        category: "/news",
        images: [
          "https://i.pinimg.com/236x/90/91/a4/9091a4a56b20215b96c7c4b7a6e10592.jpg",
          "https://i.pinimg.com/236x/c1/97/0d/c1970dbcc8c60bcde3f5e9ea899d38a7.jpg",
          "https://i.pinimg.com/236x/0f/27/42/0f2742ca1ca53c7ad5c9299c317b97e9.jpg"
        ]
      },
      {
        id: 46,
        img: "https://i.pinimg.com/236x/e4/72/5f/e4725f9a4b9a97e080b968d8d92a299b.jpg",
        title: "Entertainment News",
        description: "Stay updated with the latest happenings in the world of entertainment, including celebrity gossip, movie premieres, music releases, and more.",
        category: "/news",
        images: [
          "https://i.pinimg.com/236x/e4/72/5f/e4725f9a4b9a97e080b968d8d92a299b.jpg",
          "https://i.pinimg.com/236x/89/33/ef/8933ef9ef2832b7e8d03f289e1d2ad47.jpg",
          "https://i.pinimg.com/236x/19/0e/9b/190e9be6a2d218dcf8e4f3e76e7d17d7.jpg"
        ]
      },
      {
        id: 47,
        img: "https://i.pinimg.com/236x/df/68/c2/df68c2d8b6f14b575313dfd8f257af67.jpg",
        title: "Science & Technology",
        description: "Get the latest updates on scientific discoveries and technological advancements. Learn about the innovations shaping our future in fields like space exploration, AI, and renewable energy.",
        category: "/news",
        images: [
          "https://i.pinimg.com/236x/df/68/c2/df68c2d8b6f14b575313dfd8f257af67.jpg",
          "https://i.pinimg.com/236x/af/a1/4d/afa14d283199c06480d2f2d7d60e6803.jpg",
          "https://i.pinimg.com/236x/4d/0e/97/4d0e97ff40a2390892b8d561fe3c2b75.jpg"
        ]
      },
      {
        id: 48,
        img: "https://i.pinimg.com/236x/72/0b/2f/720b2f2a8986a5bb12ca2a71b6a0a8b7.jpg",
        title: "Weather Updates",
        description: "Get the latest weather forecasts and updates for your region, including temperature, rain predictions, and storm alerts. Stay prepared for any weather conditions.",
        category: "/news",
        images: [
          "https://i.pinimg.com/236x/72/0b/2f/720b2f2a8986a5bb12ca2a71b6a0a8b7.jpg",
          "https://i.pinimg.com/236x/4c/c4/53/4cc45322eb11e8c51be63c493b5067d8.jpg",
          "https://i.pinimg.com/236x/9e/d6/9d/9ed69d9b86523530c83d8bb2119c6253.jpg"
        ]
      },{
        id: 60,
        img: "https://i.pinimg.com/236x/87/88/f1/8788f1a0a37c01970b7032b75fa13f68.jpg",
        title: "Nature's Wonders",
        description: "Explore the breathtaking beauty of nature, from majestic mountains to serene forests and vibrant wildlife. Stay updated with the latest discoveries in the natural world.",
        category: "/nature",
        images: [
          "https://i.pinimg.com/236x/87/88/f1/8788f1a0a37c01970b7032b75fa13f68.jpg",
          "https://i.pinimg.com/236x/ea/7e/c0/ea7ec0eaa1593e4a9874384c249b56ef.jpg",
          "https://i.pinimg.com/236x/d0/64/2f/d0642f24abdb76d2f6f0799c842fa5be.jpg"
        ]
      },
      {
        id: 61,
        img: "https://i.pinimg.com/236x/2c/c9/7f/2cc97fb8d87d8e73e428fd3872730b3d.jpg",
        title: "Wildlife Conservation",
        description: "Stay informed on efforts to protect endangered species and preserve ecosystems. Read about conservation initiatives, habitat protection, and the latest in wildlife research.",
        category: "/nature",
        images: [
          "https://i.pinimg.com/236x/2c/c9/7f/2cc97fb8d87d8e73e428fd3872730b3d.jpg",
          "https://i.pinimg.com/236x/3f/f4/56/3ff456d39d6a1be3f74b75915e4b3f0a.jpg",
          "https://i.pinimg.com/236x/c8/a0/85/c8a085e6fe80cbd5978a17aeb28e21ab.jpg"
        ]
      },
      {
        id: 62,
        img: "https://i.pinimg.com/236x/90/ee/99/90ee99ea4443428f31b12d6a5539bb5b.jpg",
        title: "Climate Change News",
        description: "Read the latest updates on climate change, from global warming trends to innovative solutions for sustainable living. Stay informed about how climate change is impacting our planet.",
        category: "/nature",
        images: [
          "https://i.pinimg.com/236x/90/ee/99/90ee99ea4443428f31b12d6a5539bb5b.jpg",
          "https://i.pinimg.com/236x/45/d1/a4/45d1a47d73c3183d55c83007d91f2358.jpg",
          "https://i.pinimg.com/236x/e1/85/d9/e185d9870e19d23f74655f74a7f5b292.jpg"
        ]
      },
      {
        id: 63,
        img: "https://i.pinimg.com/236x/1f/44/a9/1f44a947042f5b41c25aebff586e1077.jpg",
        title: "Environmental Protection",
        description: "Discover the latest initiatives and news on protecting our environment. From pollution control to sustainable practices, stay updated on how we can safeguard the planet for future generations.",
        category: "/nature",
        images: [
          "https://i.pinimg.com/236x/1f/44/a9/1f44a947042f5b41c25aebff586e1077.jpg",
          "https://i.pinimg.com/236x/19/d2/83/19d2832bb28da6221d19eb90e49849ae.jpg",
          "https://i.pinimg.com/236x/58/f9/94/58f99408d080ad09fe053b7d9573195f.jpg"
        ]
      },
      {
        id: 64,
        img: "https://i.pinimg.com/236x/60/7b/1b/607b1b4561708ed5518b58b87674bc99.jpg",
        title: "Rainforest Preservation",
        description: "Explore the critical efforts to preserve the world's rainforests, the lungs of the planet. Learn about the flora and fauna at risk and how deforestation is being tackled worldwide.",
        category: "/nature",
        images: [
          "https://i.pinimg.com/236x/60/7b/1b/607b1b4561708ed5518b58b87674bc99.jpg",
          "https://i.pinimg.com/236x/6f/42/92/6f4292d83b8c57eae81bdbfe466350a2.jpg",
          "https://i.pinimg.com/236x/fd/1d/c3/fd1dc37e7e6cfa8e415d8b92f736e91c.jpg"
        ]
      },
      {
        id: 65,
        img: "https://i.pinimg.com/236x/81/3b/68/813b681bfb9a1c653771c818282b6780.jpg",
        title: "Ocean Conservation",
        description: "Dive into the world of ocean conservation, with news on protecting marine life, combating plastic pollution, and sustainable fishing practices to maintain the health of our oceans.",
        category: "/nature",
        images: [
          "https://i.pinimg.com/236x/81/3b/68/813b681bfb9a1c653771c818282b6780.jpg",
          "https://i.pinimg.com/236x/97/2c/7a/972c7a1c507d1c0e98ac93a1c41a1954.jpg",
          "https://i.pinimg.com/236x/66/1c/24/661c24e74a09cd2c73e090c9488fd301.jpg"
        ]
      },
      {
        id: 66,
        img: "https://i.pinimg.com/236x/a9/70/1f/a9701f15c73099f89d7a2e83d53c7a63.jpg",
        title: "Sustainable Living",
        description: "Stay informed about sustainable living practices, from eco-friendly homes to green energy solutions. Learn how small lifestyle changes can contribute to a healthier planet.",
        category: "/nature",
        images: [
          "https://i.pinimg.com/236x/a9/70/1f/a9701f15c73099f89d7a2e83d53c7a63.jpg",
          "https://i.pinimg.com/236x/76/6d/96/766d960d0e6267d0e4a62c72bcbf6edb.jpg",
          "https://i.pinimg.com/236x/21/56/9c/21569c8e16f1b1f3c17f498c1ffb6b4b.jpg"
        ]
      },
      {
        id: 67,
        img: "https://i.pinimg.com/236x/e9/63/72/e96372a93940d5c1b93962d93bdb951b.jpg",
        title: "Pollution Control",
        description: "Get the latest updates on pollution control measures, from air and water quality to reducing waste and emissions. Discover global efforts to combat pollution and safeguard our health.",
        category: "/nature",
        images: [
          "https://i.pinimg.com/236x/e9/63/72/e96372a93940d5c1b93962d93bdb951b.jpg",
          "https://i.pinimg.com/236x/38/5c/57/385c57ff6cb8f6b22d3a141d96b0e575.jpg",
          "https://i.pinimg.com/236x/3b/f7/0e/3bf70ed62e88caaac4f2012b7f595207.jpg"
        ]
      },
      {
        id: 68,
        img: "https://i.pinimg.com/236x/22/51/34/225134e79ef93709d9e2c3b4fca5a8f3.jpg",
        title: "Endangered Species",
        description: "Learn about endangered species around the world and the ongoing efforts to protect them. From habitat restoration to breeding programs, discover the conservation work helping to save our wildlife.",
        category: "/nature",
        images: [
          "https://i.pinimg.com/236x/22/51/34/225134e79ef93709d9e2c3b4fca5a8f3.jpg",
          "https://i.pinimg.com/236x/19/d0/a3/19d0a3cd1778c7d0cc30b87e5858975e.jpg",
          "https://i.pinimg.com/236x/f8/6f/4e/f86f4e835dd3a96c8da1fc823f0ac82c.jpg"
        ]
      }
      
      
  ];
  
export default BLOGS