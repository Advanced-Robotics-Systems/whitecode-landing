import { AddressCard } from "@/components";
import { countries, countryData } from "@/data";

const Addresses = () => {
  return (
    <div className="mt-14 lg-mt-20 xl:mt-24 space-y-6 md:space-y-8 lg:spacy10 xl:space-y-12">
      <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-montserrat text-primary text-center whitespace-nowrap">
        Where to find Us
      </p>
      <div className="flex justify-center flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-12 xl:gap-14 2xl:gap-16">
          {countryData.map((country, index) => (
            <AddressCard
              key={index}
              name={country.name}
              address={country.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
