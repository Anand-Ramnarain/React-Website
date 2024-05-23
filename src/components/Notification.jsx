import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <article
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      {/* Profile image */}
      <img
        src={notification1}
        width={62}
        height={62}
        alt="profile"
        className="rounded-xl"
      />

      {/* Notification details */}
      <section className="flex-1">
        {/* Title */}
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        {/* Icons and timestamp */}
        <section className="flex items-center justify-between">
          {/* Icons */}
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>
          {/* Timestamp */}
          <div className="body-2 text-n-13">1m ago</div>
        </section>
      </section>
    </article>
  );
};

export default Notification;
