const ContactPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-3">
      <div className="my-20">
        {/* Option 1 */}
        {/* <div className="relative">
          <img
            className="h-[360px] w-full rounded-3xl"
            src="https://i.ibb.co/nsQ0zFcS/8780825b11a2bbf1ec5cd94d8c47d167a29320c9.png"
            alt="Colorful BG"
          />
          <h1 className="text-[64px] font-black text-white text-center absolute top-20 shadow-lg">
            If you need help, don't hesitate to contact our support team!
          </h1>
        </div> */}

        {/* Option 2 */}
        <div className="bg-gradient-to-b from-[#ff5b5f] to-[#e92231] py-20 px-28 rounded-3xl">
          <h1
            className="text-[64px] font-black text-white text-center "
            style={{ textShadow: "0 6px 20px rgba(0, 0, 0, 0.6)" }}
          >
            If you need help, don't hesitate to contact our support team!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
