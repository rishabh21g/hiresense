import { Calendar, Clock, Briefcase } from 'lucide-react';
import moment from 'moment';
import React from 'react';

const InterviewDetailContainer = ({ interviewDetails }) => {
  return (
    <div className="w-full bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg shadow-xl overflow-hidden my-6">
      <div className="px-6 py-4 bg-teal-300 bg-opacity-75 border-b border-teal-400">
        <h2 className="text-xl font-bold text-teal-800 tracking-tight">Interview Details</h2>
      </div>
      <div className="px-6 py-5">
        <div className="flex items-center mb-4">
          <Briefcase className="size-6 mr-3 text-teal-600" />
          <h3 className="text-lg font-semibold text-teal-800 capitalize tracking-wide">{interviewDetails?.jobPosition}</h3>
        </div>
        <p className="text-teal-700 leading-relaxed mb-4">{interviewDetails?.jobDescription}</p>
        <div className="space-y-3 text-sm text-teal-700">
          <div className="flex items-center">
            <Calendar className="size-5 mr-2 text-teal-500" />
            <span>Created On: <span className="font-medium">{moment(interviewDetails?.created_at).format('MMMM Do, YYYY [at] h:mm a')}</span></span>
          </div>
          {interviewDetails?.duration && (
            <div className="flex items-center">
              <Clock className="size-5 mr-2 text-teal-500" />
              <span>Duration: <span className="font-medium">{interviewDetails.duration}</span></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewDetailContainer;