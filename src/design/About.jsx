import { curve1, curve2 } from "../assets";

export const RightCurve = () => {
  return (
    <section className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src={curve2} width={162} height={76} alt="Curve 2" />
    </section>
  );
};

export const LeftCurve = () => {
  return (
    <section className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </section>
  );
};
