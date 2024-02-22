import Layout from "../../Layout/Layout";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUser } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../states/Actors/UserActor";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Parudeesa",
    artist: "Sreenath Bhasi",
    mp3: new Audio("/assets/song/Parudeesa.mp3"),
    img: "/assets/Bheeshma Parvam.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Mazhavillile",
    artist: "Kapil",
    mp3: new Audio("/assets/song/Mazhavillile.mp3"),
    img: "/assets/Falimy.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Neela nilave",
    artist: "Anuvi",
    mp3: new Audio("/assets/song/Neela.mp3"),
    img: "/assets/rdx.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Jil",
    artist: "Mithun",
    mp3: new Audio("/assets/song/JIL.mp3"),
    img: "/assets/Sulaikha Manzil.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "jacobinte Swargaragyam",
    artist: "Rzee",
    mp3: new Audio("/assets/song/Jacobinte.mp3"),
    img: "/assets/jacobinteswargarajyam.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Animal",
    artist: "A",
    mp3: new Audio("/assets/song/ANIMAL.mp3"),
    img: "/assets/animal.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Anuv",
    artist: "B",
    mp3: new Audio("/assets/song/Anuv.mp3"),
    img: "/assets/Husan.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Jawan",
    artist: "C",
    mp3: new Audio("/assets/song/JAWAN.mp3"),
    img: "/assets/chaleya.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Lutt",
    artist: "DDD",
    mp3: new Audio("/assets/song/Lutt.mp3"),
    img: "/assets/Lutt Putt Gaya.jpg",
  },
];

export const songsss = [
  {
    id: Math.random() * Date.now(),
    title: "Parudeesa",
    artist: "Sreenath Bhasi",
    mp3: new Audio("/assets/song/Parudeesa.mp3"),
    img: "/assets/Bheeshma Parvam.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Mazhavillile",
    artist: "Kapil",
    mp3: new Audio("/assets/song/Mazhavillile.mp3"),
    img: "/assets/Falimy.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Neela nilave",
    artist: "Anuvi",
    mp3: new Audio("/assets/song/Neela.mp3"),
    img: "/assets/rdx.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Jil",
    artist: "Mithun",
    mp3: new Audio("/assets/song/JIL.mp3"),
    img: "/assets/Sulaikha Manzil.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "jacobinte Swargaragyam",
    artist: "Rzee",
    mp3: new Audio("/assets/song/Jacobinte.mp3"),
    img: "/assets/jacobinteswargarajyam.jpg",
  },
];

export const songss = [
  {
    id: Math.random() * Date.now(),
    title: "Animal",
    artist: "A",
    mp3: new Audio("/assets/song/ANIMAL.mp3"),
    img: "/assets/animal.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Anuv",
    artist: "B",
    mp3: new Audio("/assets/song/Anuv.mp3"),
    img: "/assets/Husan.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Jawan",
    artist: "C",
    mp3: new Audio("/assets/song/JAWAN.mp3"),
    img: "/assets/chaleya.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Lutt",
    artist: "DDD",
    mp3: new Audio("/assets/song/Lutt.mp3"),
    img: "/assets/Lutt Putt Gaya.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "jacobinte Swargaragyam",
    artist: "EEE",
    mp3: new Audio("/assets/song/Jacobinte.mp3"),
    img: "/assets/jacobinteswargarajyam.jpg",
  },
];

const Home = () => {
  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Top Malayalam songs
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songsss.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Trending
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songss.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer />
      <SongBar />
    </Layout>
  );
};

export default Home;
