'use client'

import Image from "next/image";
import Obituary from "/videos/Obituary.mp4";
import GuestBook from "./condolences/guest-book/page";
import GuestBookEditDisplay from "@/components/guest-book/GuestBookEditDisplay";
import GuestBookForm from "@/components/guest-book/GuestBookForm";
import GuestBookCard from "@/components/guest-book/GuestBookCard";

export default function Home() {
  return (
    <div>
       <div>
       <h1><strong>In Loving Memory Of Susan Jones-Miree</strong></h1>
       <h1><strong>August 16, 1954 - June 11, 2024</strong></h1>

        <figure id="img-div">
        <img
          id="image" src="https://www.dropbox.com/scl/fi/muvhkgdhb6rmy4f1ntv87/yungSuz.jpg?rlkey=5xs7neneyq2bzs889f72s82hy&raw=1"
          alt=""
        />
        <figcaption id="img-caption"><h1><strong><i>Obituary</i></strong></h1><p><i>Susan Jones-Miree was born in New York City on August 16, 1954 to the late Grafton and Ruby Jones. The oldest of three, she was raised alongside her two brothers, Stephen (Bosco) and George (Randy) in the Bronx. She and her first cousins Darlene Gathers and the late Marie Belcher supported and loved each other as sisters. She raised 4 beautiful daughters, Niema, Ruby, Bobbi and Suburwa. She was a phenomenal mother and a doting grandmother to Nyrhan (Charli), Nyia (Banga Banga), Damon (The Invisible Man), Daija (Mama Dae), Devin (Master Devin), Raina (Biscuit), Railan (Deep-Dish) and great-grandmother to Jaxen (Lil Tiger), Luna (Pretty Lu) and Zayed (Z). She was a wonderful aunt to her nieces Giselle and Stephanie Jones, Talia Parker and nephews George and Stephen Jones. Susan loved her beautiful tribe.</i></p>
          <p><i>Susan dedicated her life to Jehovah and was baptized in February of 1986 at the Stanley Theatre in Jersey City. She considered it a privilege and enjoyed making meals for the bethelites in her congregation and meeting new friends in her assignment as a tour guide at the Stanley Theatre. She looked forward to turning in her slip to auxiliary pioneer throughout the year. She could be found in the ministry, happily on zoom letter-writing with her friends for hours at a time or having conversations with people at the local carts when her health permitted. Susan was determined to give Jehovah her best. She was magnetic and made genuine connections with people. She gained spiritual mothers, fathers, sons and daughters and made life-long friendships that supported her.</i></p>
          <p><i>Susan was industrious and willing to assist others. She would text her loved ones daily to ensure that they were ok, expressing her love and concern. Throughout her life, she showed her support and love to many by showing up and “simply doing what needed to be done”. She recognized that true happiness was in giving and willingly putting the needs of others before her own. Susan loved fashion and it showed, she always looked her best. She had a passion for modeling, participated in several runway shows and was featured in magazines. Susan had many skills: cooking, photography, writing poetry, make-up artistry, an exceptional receptionist and office manager. She had many hobbies and interests: calligraphy, crocheting, a collector of art, beautiful stationery, and signed copies of books, decorating, listening to music, going to museums and Broadway shows, reading, dancing, walking through and exploring New York City.</i></p>
          <p><i>Susan was a well rounded, refined individual who loved to learn and share her knowledge with others over a sip of coffee or tea. She enjoyed deep meaningful conversations with her loved ones regularly. She has a host of true friends from all walks of her life; cherished all of her relationships and held them close to her heart. Susan was greatly loved and she will be greatly missed.</i></p>
        </figcaption></figure>
       </div>

       <div className="reddress">
        <img src="https://www.dropbox.com/scl/fi/5674bpyg1zyv3yg5zntff/IMG_20220415_215406256.jpg?rlkey=fshc1ks31v3erl40dnrr8qvjs&st=ktkrl8um&raw=1"
        alt="" width="500" height="600"
        />
       </div>

        <div>
        <h2><strong><i>POEM for Susan written by Taffy Hailey</i></strong></h2>
          <p><i>My first Christian congregation was in West Farms on Boston Road. In addition to my bible instructor, I didn't know a single soul. As I observed the friends, a lady very slender and tall, was the most fashionably dressed in the Kingdom Hall. She wore scarves and gloves like actresses from way back in the day. She sat very elegantly, crossing and wrapping her legs. Her name was Susan, she had four daughters: Niema, Ruby, Bobbi and Suburwa. After the assembly was announced, Susan approached me by surprise, accompanied by Philip Jarvis, asking are you getting baptized? I was elated! She befriended me, so I happily obliged. We instantly became buddies when I got baptized in 89.<br></br>Susan opened the door to all the friends who were able, with homemade chicken soup on the stove and fresh bagels on the table. We listened to jazz and oldies during joy rides with the Anthony's, diner hopping, eating and drinking coffee with ice cream, cheeseburgers and fried chicken is what most of us ate. Susan chose portobello mushrooms and ate it like steak. She was very health conscious and extremely well rounded, looking half her age, on-lookers were astounded.<br></br>During my time of weakness, Susan called me everyday, sharing daily texts with me; encouraged me while she prayed. While Satan bullied me, Jehovah used Susan as a tool, to get me back on spiritual track to avoid rebelling like a fool. We attended memorials together. I helped her move down south. Bobbi rolled out the welcome mat making me comfortable in her house. Susan was the exact spiritual light that I so desperately needed. I was very impressed by her example, soon after I heeded. She became my best friend. She stuck by me all the way. We encouraged each other by texting everyday.<br></br>In time, she shared her diagnosis which made me sad and blue. She was extremely strong in explaining it, but I didn't want it to be true. When Susan went into hospice, I just had to see her one more time. I made every effort to get to my sister, before she closed her eyes. I held her hand as it was cold to the touch. Tears fell as I said I love you and I will miss you very much. To Bobbi and Suburwa, continue to keep the faith. Your mother will be looking for you when she is awakened. To the rest of the family, I am so sorry for your grief. Rest assured Susan Jones-Miree is in Jehovah's memory.</i><br></br></p>
        </div>

        <div className="creamsweater">
        <img src="https://www.dropbox.com/scl/fi/55re1upzz6snd0olecbkq/150637-edited.jpeg?rlkey=4nrts2aa7p76sm54k0f2dx8cz&st=70r433ks&raw=1"
        alt="" width="500" height="600"
        />
       </div>

        <div>
          <p>Sign the <a href="http://localhost:3000/condolences/guest-book" target="_blank"><strong>Guest Book</strong></a> for Susan Jones-Miree</p>
        </div>
       
</div>

  )    
}
