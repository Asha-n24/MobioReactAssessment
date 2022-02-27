import Vegetables from '../Images/Vegetables.jpg'; 
import Fruits from '../Images/Fruits.jpg';
import Apple from '../Images/apple.jpg';  
import Banana from '../Images/banana.jpg';  
import BlackGrapes from '../Images/black.png';  
import PineApple from '../Images/pineapple.png';
import Mango from '../Images/mango.jfif';
import Orange from '../Images/orange.png';
import Muskmelon from '../Images/muskmelon.jpg';
import Grapes from '../Images/gree.png';
import Brinjal from '../Images/brinjal.jpg';
import Carrot from '../Images/Carrot.jpg';
import Beans from '../Images/beans.jpg';
import Beetroot from '../Images/beetroot.jpg';
import HorseGram from '../Images/horsegram.png';
import Mixed from '../Images/mixed.png';
import BrownChanna from '../Images/brownchanna.png';
import DryFruit from '../Images/dryfruitbasket.jpg';
import Almond from '../Images/almond.jpg';
import Pista from '../Images/pista.jpg';
import Cashew from '../Images/cashew.jpg';
import Tide from '../Images/tide.png';
import Gain from '../Images/gain.jfif';
import Surfexcel from '../Images/surfexcel.jpg';
import Persil from '../Images/persil.jfif';
import Laundrydetergent from '../Images/laundrydetergent.jpg';
import Mixture from '../Images/mixture.jpg';
import Nippat from '../Images/nippat.jpg';
import Chips from '../Images/chips.jpg';
import Peanut from '../Images/peanut.jpg';
import Biscuit from '../Images/biscuit.webp';
import Snacks from '../Images/snacks.png';
import Grains from '../Images/grains.jpg';
import Wheat from '../Images/wheat.jpg';
import Barley from '../Images/barley.jpg';
import Soya from '../Images/soya.jpg';
import Flours from '../Images/flours.jpg';
import WheatFlour from '../Images/wheatflour.jpeg';
import RiceFlour from '../Images/riceflour.png';
import Maida from '../Images/maida.jpg';
import GramFlour from '../Images/gramflour.jpg';

import MixedPickel from '../Images/mixedpickel.jfif';
import Amla from '../Images/amla.jfif';
import MangoPickel from '../Images/mangopickel.jfif';
import Lemon from '../Images/lemon.jfif';
import Pickel from '../Images/pickel.jfif';
import SoftDrinks from '../Images/softdrinks.jfif';
import Up from '../Images/7up.jfif';
import Fanta from '../Images/fanta.jfif';
import Sprite from '../Images/sprite.jfif';
import CocaCola from '../Images/cocacola.jfif';

export const productdata =  [
    {
        Id:1,
        CategoryName: 'Vegetables',
        Image:Vegetables,
        Products:[
            {
            ProductId:1,
            ProductName:"Brinjal",
            CategoryName: 'Vegetables',
            Price:50,
            ProductImage:Brinjal,
            Offer:"N",

        },
        {
            ProductId:2,
            ProductName:"Beans",
            CategoryName: 'Vegetables',
            Price:45,
            ProductImage:Beans,
            Offer:"N",

        },
        {
            ProductId:3,
            ProductName:"Carrot",
            CategoryName: 'Vegetables',
            Price:60,
            ProductImage:Carrot,
            Offer:"Y",
            OfferPrice:2

        },
        {
            ProductId:4,
            ProductName:"Beetroot",
            CategoryName: 'Vegetables',
            Price:30,
            ProductImage:Beetroot,
            Offer:"N",

        },
    ]
    },
    {
        Id:2,
        CategoryName: 'Fruits',
        Image:Fruits,
        Products:[
            {
            ProductId:5,
            ProductName:"Apple",
            CategoryName: 'Fruits',
            Price:100,
            ProductImage:Apple,
            Offer:"N",

        },
        {
            ProductId:6,
            ProductName:"Banana",
            CategoryName: 'Fruits',
            Price:100,
            ProductImage:Banana,
            Offer:"N",

        },
        {
            ProductId:7,
            ProductName:"Black Grapes",
            CategoryName: 'Fruits',
            Price:70,
            ProductImage:BlackGrapes,
            Offer:"N",

        },
        {
            ProductId:8,
            ProductName:"PineApple",
            CategoryName: 'Fruits',
            Price:30,
            ProductImage:PineApple,
            Offer:"N",

        },
        {
            ProductId:9,
            ProductName:"Orange",
            CategoryName: 'Fruits',
            Price:85,
            ProductImage:Orange,
            Offer:"N",

        },
        {
            ProductId:10,
            ProductName:"Muskmelon",
            CategoryName: 'Fruits',
            Price:120,
            ProductImage:Muskmelon,
            Offer:"N",

        },
        {
            ProductId:11,
            ProductName:"Grapes",
            CategoryName: 'Fruits',
            Price:90,
            ProductImage:Grapes,
            Offer:"N",
        },
        {
            ProductId:12,
            ProductName:"Mango",
            CategoryName: 'Fruits',
            Price:150,
            ProductImage:Mango,
            Offer:"Y",
            OfferPrice:5
        },
        
    ]
    },
    {
        Id:3,
        CategoryName: 'Sprouts',
        Image:BrownChanna,
        Products:[
            {
            ProductId:13,
            ProductName:"Mixed",
            CategoryName: 'Sprouts',
            Price:50,
            ProductImage:Mixed,
            Offer:"Y",
            OfferPrice:3

        },
        {
            ProductId:14,
            ProductName:"Brown Channa",
            CategoryName: 'Sprouts',
            Price:45,
            ProductImage:BrownChanna,
            Offer:"N",

        },
        {
            ProductId:15,
            ProductName:"HorseGram",
            CategoryName: 'Sprouts',
            Price:60,
            ProductImage:HorseGram,
            Offer:"N",
        },
      
    ]
    },
    {
        Id:4,
        CategoryName: 'Nuts',
        Image:DryFruit,
        Products:[
            {
            ProductId:16,
            ProductName:"Almond",
            CategoryName: 'Nuts',
            Price:100,
            ProductImage:Almond,
            Offer:"Y",
            OfferPrice:3

        },
        {
            ProductId:17,
            ProductName:"Pista",
            CategoryName: 'Nuts',
            Price:145,
            ProductImage:Pista,
            Offer:"N",

        },
        {
            ProductId:18,
            ProductName:"Cashew",
            CategoryName: 'Nuts',
            Price:90,
            ProductImage:Cashew,
            Offer:"N",
        },
      
    ]
    },
    {
        Id:5,
        CategoryName: 'Laundry Detergent',
        Image:Laundrydetergent,
        Products:[
            {
            ProductId:19,
            ProductName:"Tide",
            CategoryName: 'Laundry Detergent',
            Price:100,
            ProductImage:Tide,
            Offer:"Y",
            OfferPrice:3

        },
        {
            ProductId:20,
            ProductName:"Persil",
            CategoryName: 'Laundry Detergent',
            Price:145,
            ProductImage:Persil,
            Offer:"N",

        },
        {
            ProductId:21,
            ProductName:"Surfexcel",
            CategoryName: 'Laundry Detergent',
            Price:90,
            ProductImage:Surfexcel,
            Offer:"N",
        },
        {
            ProductId:22,
            ProductName:"Gain",
            CategoryName: 'Laundry Detergent',
            Price:100,
            ProductImage:Gain,
            Offer:"Y",
            OfferPrice:5

        },
      
    ]
    },
    {
        Id:6,
        CategoryName: 'Snacks',
        Image:Snacks,
        Products:[
            {
            ProductId:23,
            ProductName:"Mixture",
            CategoryName: 'Snacks',
            Price:100,
            ProductImage:Mixture,
            Offer:"Y",
            OfferPrice:3

        },
        {
            ProductId:24,
            ProductName:"Chips",
            CategoryName: 'Snacks',
            Price:145,
            ProductImage:Chips,
            Offer:"N",

        },
        {
            ProductId:25,
            ProductName:"Biscuit",
            CategoryName: 'Snacks',
            Price:20,
            ProductImage:Biscuit,
            Offer:"N",
        },
        {
            ProductId:26,
            ProductName:"Peanut Candy",
            CategoryName: 'Snacks',
            Price:80,
            ProductImage:Peanut,
            Offer:"Y",
            OfferPrice:5

        },
        {
            ProductId:27,
            ProductName:"Nippat",
            CategoryName: 'Snacks',
            Price:80,
            ProductImage:Nippat,
            Offer:"Y",
            OfferPrice:5

        },
      
    ]
    },
    {
        Id:7,
        CategoryName: 'Grains',
        Image:Grains,
        Products:[
            {
            ProductId:28,
            ProductName:"Wheat",
            CategoryName: 'Grains',
            Price:100,
            ProductImage:Wheat,
            Offer:"N",

        },
        {
            ProductId:29,
            ProductName:"Soya Bean",
            CategoryName: 'Grains',
            Price:145,
            ProductImage:Soya,
            Offer:"N",

        },
        {
            ProductId:30,
            ProductName:"Barley",
            CategoryName: 'Grains',
            Price:120,
            ProductImage:Barley,
            Offer:"N",
        },
       
    ]
    },
    {
        Id:8,
        CategoryName: 'Flours',
        Image:Flours,
        Products:[
            {
            ProductId:31,
            ProductName:"Maida",
            CategoryName: 'Flours',
            Price:100,
            ProductImage:Maida,
            Offer:"N",

        },
        {
            ProductId:32,
            ProductName:"Rice Flour",
            CategoryName: 'Flours',
            Price:145,
            ProductImage:RiceFlour,
            Offer:"N",

        },
        {
            ProductId:33,
            ProductName:"Gram Flour",
            CategoryName: 'Flours',
            Price:80,
            ProductImage:GramFlour,
            Offer:"N",
        },
        {
            ProductId:34,
            ProductName:"Wheat Flour",
            CategoryName: 'Flours',
            Price:120,
            ProductImage:WheatFlour,
            Offer:"N",
        },
       
    ]
    },
    {
        Id:9,
        CategoryName: 'Pickel',
        Image:Pickel,
        Products:[
            {
            ProductId:35,
            ProductName:"Mango Pickel",
            CategoryName: 'Pickel',
            Price:110,
            ProductImage:MangoPickel,
            Offer:"N",

        },
        {
            ProductId:36,
            ProductName:"Mixed Pickel",
            CategoryName: 'Pickel',
            Price:100,
            ProductImage:MixedPickel,
            Offer:"N",

        },
        {
            ProductId:37,
            ProductName:"Amla Pickel",
            CategoryName: 'Pickel',
            Price:90,
            ProductImage:Amla,
            Offer:"Y",
            OfferPrice:5
        },
        {
            ProductId:38,
            ProductName:"Lemon Pickel",
            CategoryName: 'Pickel',
            Price:80,
            ProductImage:Lemon,
            Offer:"N",
        },
       
    ]
    },

    {
        Id:10,
        CategoryName: 'Soft Drinks',
        Image:SoftDrinks,
        Products:[
            {
            ProductId:39,
            ProductName:"Sprite",
            CategoryName: 'Soft Drinks',
            Price:30,
            ProductImage:Sprite,
            Offer:"N",

        },
        {
            ProductId:40,
            ProductName:"7Up",
            CategoryName: 'Soft Drinks',
            Price:40,
            ProductImage:Up,
            Offer:"N",

        },
        {
            ProductId:41,
            ProductName:"Fanta",
            CategoryName: 'Soft Drinks',
            Price:50,
            ProductImage:Fanta,
            Offer:"Y",
            OfferPrice:5
        },
        {
            ProductId:42,
            ProductName:"Coca Cola",
            CategoryName: 'Soft Drinks',
            Price:80,
            ProductImage:CocaCola,
            Offer:"N",
        },
       
    ]
    },
]