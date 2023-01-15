import React, { useEffect, useRef } from 'react';
import css from './Scroll.module.scss';

const images: any = [
  {
    id: '1',
    title: 'title',
    text: 'какой-то текст',
    img: 'https://static.mk.ru/upload/entities/2020/04/04/16/articles/detailPicture/90/dd/1b/4b/3f2d572ad50eb6f6a463f5db50ebefaf.jpg',
  },
  {
    id: '2',
    title: 'title',
    text: 'какой-то текст',
    img: 'https://kolomna-hotel.ru/upload/iblock/322/322e31242c44b4ab9fd5c407aafb2376.jpg',
  },
  {
    id: '3',
    title: 'title',
    text: 'какой-то текст',
    img: 'https://www.gdom.ru/netcat_files/93/42/ae4fac83058192a3c8157bf122395358',
  },
  {
    id: '4',
    title: 'title',
    text: 'какой-то текст',
    img: 'https://avatars.mds.yandex.net/get-altay/374295/2a0000015b16ffca147fb9c684415f573ae0/XXL',
  },
  {
    id: '5',
    title: 'title',
    text: 'какой-то текст',
    img: 'https://cdn.ostrovok.ru/t/1200x616/content/91/6e/916ef98b3e8b2254b58ebc37c74d9dc8bd915d48.jpeg',
  },
  {
    id: '6',
    title: 'title',
    text: 'какой-то текст',
    img: 'https://gorod-kurort-anapa.ru/hot_img/791_gda_maria/main.jpg',
  },
  {
    id: '7',
    title: 'title',
    text: 'какой-то текст',
    img: 'https://www.msk-guide.ru/img/9682/MskGuide.ru_49304mid2.jpg',
  },
];
const Scroll: React.FC = () => {
  return (
    <div className={css.images}>
      {images.map((el: any) => (
        <div key={el.id} className={css.item}>
          <img className={css.card_image} src={el.img} alt={el.title} />
        </div>
      ))}
    </div>
  );
};
export default Scroll;
