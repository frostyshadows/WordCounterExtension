import { Session } from "@supabase/supabase-js";
import ProjectDropdown from "./ProjectDropdown";
import WordCountForm from "./WordCountForm";
import WordCountProgressBar from "./WordCountProgressBar";
import { useEffect } from "react";
import { supabase } from "../supabase";

export interface Props {
  session: Session;
}

export default function Dashboard({ session }: Props) {
  useEffect(() => {
    createUser();
  }, []);

  const createUser = async () => {
    const { user } = session;
    const updates = { uuid: user.id };
    let { error } = await supabase.from("User").upsert(updates);
    if (error) {
      alert(error.message);
    }
  };

  const dummyProgressProps = { current: 300, target: 500, period: "today" };
  return (
    <div className="p-8 flex flex-col gap-1 items-start">
      <ProjectDropdown />
      <WordCountForm />
      <WordCountProgressBar {...dummyProgressProps} />
    </div>
  );
}
