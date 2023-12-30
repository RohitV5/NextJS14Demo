import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { genre: string };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  if (!id) notFound();


  return (
    <div>
      Welcome tot the genre with ID: {id} and name: {genre}
    </div>
  );
}
//localhost:3000/genre/80?genre=action
export default GenrePage;
