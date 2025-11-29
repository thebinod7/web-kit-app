'use client';

import { Trash } from 'lucide-react';
import { toast } from 'sonner';

export default function ConfirmBox({ onConfirm }: { onConfirm: () => void }) {
    const showConfirm = () => {
        toast.custom(
            (t) => (
                <div className="p-5 bg-white rounded-xl shadow-lg flex flex-col gap-4 w-64">
                    {/* Title */}
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Confirm Delete
                        </h3>
                        <p className="text-sm text-gray-600">
                            Your resume data will be permanently deleted. Are
                            you sure to proceed?
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={() => toast.dismiss(t)}
                            className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={() => {
                                toast.dismiss(t);
                                onConfirm();
                                toast.success('Resume data cleard!');
                            }}
                            className="px-3 py-1.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            ),
            {
                duration: Infinity,
            }
        );
    };

    return (
        <button
            onClick={showConfirm}
            className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
        >
            <Trash size={18} />
            Clear Resume
        </button>
    );
}
