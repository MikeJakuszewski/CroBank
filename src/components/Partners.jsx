import styles from "../style";
import { clients } from "../constants";

const Partners = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          const { id, logo } = client;
          return (
            <div
              key={id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            >
              <img
                src={logo}
                alt={id}
                className="sm:w-[192px] w-[100px] object-contain hover:invert"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Partners;
