const TradeVolume = () => {
  return (
    <div className="mt-11 flex space-x-8">
      <div className="w-1/2">
        <div>
          <span className="inline-block font-display text-4xl font-semibold text-accent">
            1
          </span>
        </div>
        <span className="text-lg text-jacarta-700 dark:text-white">
          Yearly Furry Convention
        </span>
      </div>
      {/* End  w-1/2 */}

      <div className="w-1/2">
        <div>
          <span className="inline-block font-display text-4xl font-semibold text-accent">
            1K+
          </span>
        </div>
        <span className="text-lg text-jacarta-700 dark:text-white">
          Members
        </span>
      </div>
    </div>
  );
};

export default TradeVolume;
