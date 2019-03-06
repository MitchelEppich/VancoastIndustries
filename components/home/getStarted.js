import Link from "next/link";

const getStarted = props => {
  return (
    <div className="vcSomething-section flex flex-col items-center">
      <h2>Ready to Get Started?</h2>
      <p>
        If your ready to start stocking your store with the worlds best cannabis
        seeds and start increasing your revenue, simply fill out the{" "}
        <Link prefetch href="/wholesale-application">
          <a>Wholesale Application</a>
        </Link>{" "}
        and Vanessa will contact you with your login details once approved.
        <br />
        <br />
        Thank you for choosing Vancoast Industries.
      </p>
    </div>
  );
};
export default getStarted;
