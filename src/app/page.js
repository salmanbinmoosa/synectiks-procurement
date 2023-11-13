import Image from "next/image";
import styles from "./page.module.css";
import Table from "../components/procurement-admin/menu/request/tables/table";
import Tablerow from "../components/procurement-admin/menu/request/tables/tablerow";
// import Filter from "../components/filter-btn/filter";
import HideFilter from "../components/hide-filter/hide-filter"
import RequestBtn from "../components/buttons/requestBtn"

export default function Home() {
  return (
    <>
      <Table />
      {/* <Filter/> */}
      <HideFilter/>
      <RequestBtn name="salman" />

      {/* <TableRow /> */}
    </>
  );
}
