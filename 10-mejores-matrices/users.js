const users = [
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Asta",
      last: "Christiansen"
    },
    location: {
      street: {
        number: 5081,
        name: "Sneppevej"
      },
      city: "Nykøbing F",
      state: "Nordjylland",
      country: "Denmark",
      postcode: 12136,
      coordinates: {
        latitude: "-29.0201",
        longitude: "103.6408"
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
      }
    },
    email: "asta.christiansen@example.com",
    login: {
      uuid: "123a8c89-0758-4e6e-ae86-03929aa3a418",
      username: "happybear273",
      password: "limited",
      salt: "BvH6A6k6",
      md5: "aa77bc3647797908f0523f4ea95ce3fc",
      sha1: "0c464db89208967214c6610af7fbce992eccd077",
      sha256: "757f48a3508ae70b1456360eff00ee5ac1b2338d0d9196b155dabc4ff0614e24"
    },
    dob: {
      date: "1976-10-12T06:59:24.554Z",
      age: 44
    },
    registered: {
      date: "2005-01-04T05:53:07.165Z",
      age: 15
    },
    phone: "66162155",
    cell: "87233770",
    id: {
      name: "CPR",
      value: "121076-7844"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg"
    },
    nat: "DK"
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Karen",
      last: "Nichols"
    },
    location: {
      street: {
        number: 9621,
        name: "St. John’S Road"
      },
      city: "Kingston upon Hull",
      state: "Dyfed",
      country: "United Kingdom",
      postcode: "C84 1SF",
      coordinates: {
        latitude: "16.8810",
        longitude: "108.3179"
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg"
      }
    },
    email: "karen.nichols@example.com",
    login: {
      uuid: "c346cc1b-e778-498a-98fc-6512f7962680",
      username: "greendog231",
      password: "81fukkc",
      salt: "j7EMykAI",
      md5: "7dd459db43dd0ee8675413c1e48680cf",
      sha1: "958daf4f551b79abade562150c6f81e6a03be189",
      sha256: "882654da43d51ae0f53a2c9a4b28eb4fbc43607477bd1e6c594d028dbcdda5a4"
    },
    dob: {
      date: "1998-02-17T07:32:30.798Z",
      age: 22
    },
    registered: {
      date: "2004-01-02T03:38:48.757Z",
      age: 16
    },
    phone: "022 5978 8992",
    cell: "0738-031-204",
    id: {
      name: "NINO",
      value: "MY 42 87 52 N"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/80.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg"
    },
    nat: "GB"
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Sofia",
      last: "Olsen"
    },
    location: {
      street: {
        number: 8983,
        name: "Hirsevænget"
      },
      city: "Gørløse",
      state: "Syddanmark",
      country: "Denmark",
      postcode: 94453,
      coordinates: {
        latitude: "-20.1172",
        longitude: "-119.1971"
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi"
      }
    },
    email: "sofia.olsen@example.com",
    login: {
      uuid: "2f1d0134-b33b-47bd-9a09-b144d9f37224",
      username: "bigrabbit664",
      password: "ariana",
      salt: "MPECa1zp",
      md5: "e9ec25ca598c68afa36fe24e4f9c0db9",
      sha1: "868308c4736e2b2bf3c85576eabb6907e4d6aba4",
      sha256: "6f4c583915ce02c4a523358e22d8613785f5744ce02a6e4efcca4e8b2645a0c6"
    },
    dob: {
      date: "1982-04-08T00:08:31.952Z",
      age: 38
    },
    registered: {
      date: "2010-10-26T08:06:42.483Z",
      age: 10
    },
    phone: "28669984",
    cell: "82713354",
    id: {
      name: "CPR",
      value: "080482-2160"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/56.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/56.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/56.jpg"
    },
    nat: "DK"
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Väinö",
      last: "Kotila"
    },
    location: {
      street: {
        number: 9380,
        name: "Nordenskiöldinkatu"
      },
      city: "Hyvinkää",
      state: "Ostrobothnia",
      country: "Finland",
      postcode: 79560,
      coordinates: {
        latitude: "56.6816",
        longitude: "-13.8552"
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)"
      }
    },
    email: "vaino.kotila@example.com",
    login: {
      uuid: "b01c06d9-6ed1-4c50-96b7-1dfde3fbebc0",
      username: "angryswan427",
      password: "hillbill",
      salt: "5vXD19jP",
      md5: "5683923eb4140a7a1615c9636e7c2d59",
      sha1: "563c59a08a563423b4d1746350b569ee5391459e",
      sha256: "f36fdf23206d7a42e1189c3c014c9f3c92838fed9a35bab620d03897e87d082d"
    },
    dob: {
      date: "1956-02-29T21:28:45.826Z",
      age: 64
    },
    registered: {
      date: "2016-04-09T12:12:51.136Z",
      age: 4
    },
    phone: "04-913-065",
    cell: "045-501-93-98",
    id: {
      name: "HETU",
      value: "NaNNA339undefined"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg"
    },
    nat: "FI"
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Thomas",
      last: "Park"
    },
    location: {
      street: {
        number: 1581,
        name: "Frederick Ave"
      },
      city: "Chipman",
      state: "Nova Scotia",
      country: "Canada",
      postcode: "U7K 2I0",
      coordinates: {
        latitude: "50.3530",
        longitude: "1.9533"
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima"
      }
    },
    email: "thomas.park@example.com",
    login: {
      uuid: "102104c7-6ac1-469a-b2ca-1fdfe2a3e749",
      username: "redleopard528",
      password: "reading",
      salt: "jaGgkj8C",
      md5: "b5f51d91325ca10367216cc5b5f58fc6",
      sha1: "d8c49a615bc890972d8e846a190c0cc5f6aba6d5",
      sha256: "99b083186f5c23072a6a12695db22f51b7b548e756bb22ccd5b6a7a259240b01"
    },
    dob: {
      date: "1985-05-08T09:09:24.055Z",
      age: 35
    },
    registered: {
      date: "2002-06-28T14:55:55.350Z",
      age: 18
    },
    phone: "351-536-7569",
    cell: "608-857-4982",
    id: {
      name: "",
      value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/56.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg"
    },
    nat: "CA"
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Marij",
      last: "Peterson"
    },
    location: {
      street: {
        number: 9752,
        name: "Bergumermeerstraat"
      },
      city: "Elsendorp",
      state: "Utrecht",
      country: "Netherlands",
      postcode: 94928,
      coordinates: {
        latitude: "-14.4505",
        longitude: "-131.4931"
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands"
      }
    },
    email: "marij.peterson@example.com",
    login: {
      uuid: "25cad49e-cddf-4e3f-ad05-2406f5736468",
      username: "ticklishkoala385",
      password: "boxers",
      salt: "5AxWwtzi",
      md5: "c48d12153a9eb95ab387de47624fa008",
      sha1: "e071aa71a03415e780c669330e32d0732a76cf4c",
      sha256: "134c85c7d12c76004f2059e44ec7b03a509ebab5d29a143a296c11bb9b0795b1"
    },
    dob: {
      date: "1975-08-07T08:04:14.675Z",
      age: 45
    },
    registered: {
      date: "2018-11-23T17:45:04.918Z",
      age: 2
    },
    phone: "(599)-503-4927",
    cell: "(091)-870-4092",
    id: {
      name: "BSN",
      value: "06470101"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/15.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg"
    },
    nat: "NL"
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Umut",
      last: "Velioğlu"
    },
    location: {
      street: {
        number: 2913,
        name: "Fatih Sultan Mehmet Cd"
      },
      city: "Bingöl",
      state: "Ordu",
      country: "Turkey",
      postcode: 48767,
      coordinates: {
        latitude: "-38.8383",
        longitude: "59.4001"
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi"
      }
    },
    email: "umut.velioglu@example.com",
    login: {
      uuid: "f1d62a3a-687b-4554-af54-933108e357e6",
      username: "beautifullion873",
      password: "ruth",
      salt: "wFqm248u",
      md5: "ad97e1e587cfd647b385b039dc21b8a2",
      sha1: "b2924c51f7210328a56537b51764f904f082652e",
      sha256: "41b95a98e9fc1ba7895fb2c0cb9ce1b0078f5f48becb076bfbc4c8d358a79c0d"
    },
    dob: {
      date: "1977-09-26T15:06:57.700Z",
      age: 43
    },
    registered: {
      date: "2006-09-15T10:14:55.174Z",
      age: 14
    },
    phone: "(452)-398-2959",
    cell: "(229)-507-9942",
    id: {
      name: "",
      value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/93.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/93.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/93.jpg"
    },
    nat: "TR"
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Adrian",
      last: "Cole"
    },
    location: {
      street: {
        number: 1952,
        name: "Adams St"
      },
      city: "Sunshine Coast",
      state: "Northern Territory",
      country: "Australia",
      postcode: 1299,
      coordinates: {
        latitude: "-49.1278",
        longitude: "112.0345"
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
      }
    },
    email: "adrian.cole@example.com",
    login: {
      uuid: "b93858ea-19e4-44df-aa77-0d6311cab793",
      username: "browngorilla780",
      password: "carlitos",
      salt: "JAu8TB6H",
      md5: "799eb5447987bf49c36ac0a559714f37",
      sha1: "f4cbc7440b07140e2359c053431ff04b02785a29",
      sha256: "128f5c9b479c869415ae478f6ff9dbfdf75c70f445dc9a18652d0e09bcee2e57"
    },
    dob: {
      date: "1975-07-31T18:31:24.124Z",
      age: 45
    },
    registered: {
      date: "2003-11-30T01:17:08.314Z",
      age: 17
    },
    phone: "03-3213-1236",
    cell: "0419-353-484",
    id: {
      name: "TFN",
      value: "376279632"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/7.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/7.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg"
    },
    nat: "AU"
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Mestan",
      last: "Arıcan"
    },
    location: {
      street: {
        number: 8421,
        name: "Şehitler Cd"
      },
      city: "Şırnak",
      state: "Ardahan",
      country: "Turkey",
      postcode: 39665,
      coordinates: {
        latitude: "66.6698",
        longitude: "54.1801"
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg"
      }
    },
    email: "mestan.arican@example.com",
    login: {
      uuid: "aefd7e3b-2558-4641-b070-f62f727ce5c7",
      username: "purplewolf377",
      password: "prozac",
      salt: "m26LQtq0",
      md5: "e8986db4f0ba8c563d643e75cbc88107",
      sha1: "3d43c7ff180932c1cb84ee83a13ae3143786a74e",
      sha256: "2810fd77102ab249a99773ab33bd2776293d3de2bf08b30551da22d00342bb99"
    },
    dob: {
      date: "1994-02-19T10:45:27.820Z",
      age: 26
    },
    registered: {
      date: "2006-03-09T07:56:49.873Z",
      age: 14
    },
    phone: "(574)-886-3239",
    cell: "(840)-519-4713",
    id: {
      name: "",
      value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/71.jpg"
    },
    nat: "TR"
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Deusete",
      last: "Caldeira"
    },
    location: {
      street: {
        number: 1494,
        name: "Rua Santa Luzia "
      },
      city: "São José do Rio Preto",
      state: "Distrito Federal",
      country: "Brazil",
      postcode: 83098,
      coordinates: {
        latitude: "63.8309",
        longitude: "170.6055"
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin"
      }
    },
    email: "deusete.caldeira@example.com",
    login: {
      uuid: "2a60d53c-24f2-4409-9990-2f5fd55d14eb",
      username: "angrycat717",
      password: "bluejays",
      salt: "A4reDxmY",
      md5: "2b83d5d691b5c035b227cbcc494cae8b",
      sha1: "5158659ae853a6739318e9745d5bdfe8b35cbdd4",
      sha256: "bde41865208479fe882d4df24758aa26eb615319893f1cc9b0e8575833b8644e"
    },
    dob: {
      date: "1946-08-31T19:31:38.838Z",
      age: 74
    },
    registered: {
      date: "2006-11-09T14:25:17.403Z",
      age: 14
    },
    phone: "(57) 3559-0154",
    cell: "(87) 3485-7986",
    id: {
      name: "",
      value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg"
    },
    nat: "BR"
  }
];
