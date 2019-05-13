const QuickDetails = props => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="text-center mx-auto w-200">
          {/* {console.log(props)} */}
          <img
            src="../static/img/products/cks/cks-white-widow-auto.png"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full text-center">
        <h3 className="text-blue uppercase text-2xl">Indica</h3>
        <h2 className="font-bold uppercase text-3/5xl">Strain Title </h2>
      </div>
      <div className="p-6">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </div>
    </div>
  );
};

export default QuickDetails;
