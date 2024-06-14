import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import GeneralScrollSpy from "./components/GeneralScrollSpy";


export default function Home() {
  return (
    <main className="">
      <GeneralScrollSpy/>
    </main>
  );
}
