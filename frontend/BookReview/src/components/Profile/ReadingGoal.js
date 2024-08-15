import React from 'react';

const ReadingGoal = ({ current, target }) => (
  <div className="bg-custom-black bg-opacity-80 rounded-lg shadow-md p-4 mb-4">
    <h3 className="text-lg font-bold text-custom-beige mb-3">Reading Goal</h3>
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-custom-beige bg-custom-violet">
            Progress
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-custom-beige">
            {Math.round((current / target) * 100)}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-custom-purple">
        <div style={{ width: `${(current / target) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-custom-beige justify-center bg-custom-violet"></div>
      </div>
      <p className="text-center text-custom-beige">
        {current} of {target} books read
      </p>
    </div>
  </div>
);
export default ReadingGoal;