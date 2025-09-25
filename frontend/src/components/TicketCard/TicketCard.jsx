import React from 'react';


const TicketCard = ({ imageUrl, propertyId, description, raisedBy, onEdit }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4">
            <div className="relative h-48">
                <img 
                    src={imageUrl} 
                    alt="Maintenance Issue"
                    className="w-full h-full object-cover"
                />
            </div>
            
            <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-600">
                        Property ID: {propertyId}
                    </span>
                    <button
                        onClick={onEdit}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition duration-300"
                    >
                        Edit Ticket
                    </button>
                </div>
                
                <p className="text-gray-700 text-base mb-2">
                    {description}
                </p>
                
                <div className="mt-4 text-sm text-gray-600">
                    <span className="font-medium">Raised by:</span> {raisedBy}
                </div>
            </div>
        </div>
    );
};

export default TicketCard;