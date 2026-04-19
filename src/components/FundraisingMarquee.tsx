import React from 'react';

const FundraisingMarquee = () => {
  const text = "Abasiramu be Mangaliba, Mukono-Katoosi road basaba oyo yenna alina obusobozi obubakwasizaako ku nsonga yokusonda sente zokugula ekifo ekyokuzimbamu omuzikiti abakwasizeeko. Contact: +256708581479 • Tusaba Allah atwanguyize ensonga eno! • ";

  return (
    <div className="fundraising-marquee">
      <div className="marquee-content">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default FundraisingMarquee;
