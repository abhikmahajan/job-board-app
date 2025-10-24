import React from 'react'

const Purpose = () => {
  return (
    <>
        <div className='flex justify-center items-center'>
            <h1 className='text-3xl text-blue-900 font-bold'>Why Use Our Website ?</h1>
            </div>
            <div className="flex gap-8 mt-8 p-4">
                <div className="flex-1 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold text-blue-800 mb-3">AI Resume Review</h2>
                    <p className="text-gray-600">
                        Get instant feedback on your resume with our advanced ATS score checker. 
                        Optimize your resume for better visibility and increase your chances of landing interviews.
                    </p>
                </div>

                <div className="flex-1 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold text-blue-800 mb-3">Smart Job Matching</h2>
                    <p className="text-gray-600">
                        Our intelligent algorithm matches your skills and experience with the most relevant job opportunities, 
                        saving you time in your job search.
                    </p>
                </div>

                <div className="flex-1 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold text-blue-800 mb-3">Real-Time Updates</h2>
                    <p className="text-gray-600">
                        Stay ahead with instant notifications for new job postings and application status updates. 
                        Never miss an opportunity that matches your profile.
                    </p>
                </div>
            
        </div>
    </>
  )
}

export default Purpose