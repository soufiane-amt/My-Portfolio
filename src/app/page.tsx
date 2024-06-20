import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import GeneralScrollSpy from "./components/GeneralScrollSpy";
import Home from "./components/Home";


export default function MainPage() {
  return (
    <div >
      <header>
          <GeneralScrollSpy/>
      </header>
      <main className="container-fluid p-0">
        <Home />
      </main>
    </div>
  );
}
