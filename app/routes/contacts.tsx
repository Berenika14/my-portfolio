import { GitHub, Linkedin, Twitter, Mail } from "react-feather";

function IconCard({
  Icon,
  size = "50",
  url,
  label,
  value,
}: {
  label: string;
  url?: string;
  Icon: React.FC<{ color: string; size: any }>;
  size?: string;
  value: string;
}) {
  return (
    <a
      href={url}
      style={{
        color: "rgba(255, 255, 255, 0.75)",
      }}
      className={`py-[25%] rounded-[8px] flex align-center sm:hover:scale-105 mb:hover-scale-105 justify-center border mb:col-span-1 ${
        url != null ? "cursor-pointer" : ""
      } border-slate-50 border-opacity-30 rounded-sm`}
    >
      <Icon color="rgba(255, 255, 255, 0.5)" size={size} />
    </a>
  );
}

export default function Contacts() {
  return (
    <div className=" flex flex-col align-stretch w-screen h-screen justify-center ">
      <div
        // style={{ flex: "column", justifyContent: "center" }}
        className=" text-orange-400 w-full grid mb:grid-cols-2 sm:grid-cols-4 px-6 mb:gap-x-4 sm:gap-x-8 mb:gap-y-4"
      >
        {/* <IconCard value="(347) 280-0754" icon="phone" label="Phone" /> */}
        <IconCard
          url="mailto:nikaa@hey.com"
          Icon={Mail}
          value="nikaa@hey.com"
          label="Email"
        />
        <IconCard
          value="@Berenika "
          label="Linked In"
          Icon={Linkedin}
          url="https://www.linkedin.com/in/berenika-ahmetaj/"
        />
        <IconCard
          value="@Berenika14"
          label="Github"
          Icon={GitHub}
          url="https://github.com/Berenika14"
        />

        <IconCard
          value="@berenika"
          label="Twitter"
          Icon={Twitter}
          url="https://twitter.com/berenikaahmetaj"
        />
      </div>
    </div>
  );
}
