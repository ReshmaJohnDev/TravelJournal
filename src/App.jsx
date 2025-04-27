import Header from "./components/Header";
import Entry from "./components/Entry";
import journalData from "./data.js";

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

const journalElements = journalData.map((journal) => {
  return (
    <Entry
      journals = {journal}
    />
  );
});

export default function App() {
  return (
    <>
      <Header />
      <main className="container">{journalElements}</main>
    </>
  );
}
