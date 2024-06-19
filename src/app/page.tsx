import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import GeneralScrollSpy from "./components/GeneralScrollSpy";
import Home from "./components/Home";


export default function MainPage() {
  return (
    <main className="container-fluid">
      <div >
        <div >
          <GeneralScrollSpy />
          <Home />
        </div>
      </div>
    </main>
  );
}
