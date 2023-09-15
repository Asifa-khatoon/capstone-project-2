import React from "react";

import Image from "next/image";
import Logo1 from "../../images/assets/Logo (1).svg";
import Logo2 from "../../images/assets/Logo (2).svg";
import Logo3 from "../../images/assets/Logo (3).svg";
import Logo4 from "../../images/assets/Logo (4).svg";
import Logo5 from "../../images/assets/Logo (5).svg";
import Logo6 from "../../images/assets/Logo (6).svg";
import Logo7 from "../../images/assets/Logo (7).svg";

const Thirdsection = () => {
  return (
    <div className="px-5  container">
      <Image src={Logo7} width={145} height={90} />

      <Image src={Logo1} width={145} height={90} />

      <Image src={Logo2} width={145} height={90} />
      <Image src={Logo3} width={145} height={90} />

      <Image src={Logo4} width={145} height={90} />
      <Image src={Logo5} width={145} height={90} />

      <Image src={Logo6} width={145} height={90} />
    </div>
  );
};

export default Thirdsection;
