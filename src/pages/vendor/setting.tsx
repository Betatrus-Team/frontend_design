import { Landmark, LockKeyhole, Pencil } from "lucide-react"
import { VendorHeader } from "./components/header"
import { useState } from "react";
import { Toggle } from "./components/toggle";
import imagePlaceholder from "../../assets/images/Container (3).png";
import { PageTitle } from "../../components/title";

type notificationPreferenceType = {
    orders : boolean,
    payout : boolean,
    marketing : boolean
}

const VendorSetting = () => {
    const [notificationPreference, setNotificationPreference] = useState<notificationPreferenceType>({
        orders : false,
        payout : false,
        marketing : false
    });

    function handleNotificationPreference (notification : "orders" | "payout" | "marketing") {
        setNotificationPreference (prev => ({...prev, [notification] : !prev[notification]}))
    }

    return (
        <div>
            <PageTitle title={"BETATRUS VENDOR | SETTINGS"} />
            <VendorHeader title="Settings" />
            <main className="font-manrope flex justify-center bg-gray-50 pb-22">
                <div className="lg:w-[90%] w-[95%] lg:my-15 md:my-10 mt-7 mb-10">
                    {/* Page Heading */}
                    <section className="mb-8">
                        <h1 className="text-[32px] font-serif text-gray-900">
                        Vendor Settings
                        </h1>

                        <p className="mt-2 text-[16px] text-gray-500">
                        Manage your shop's digital presence, account security, and payment
                        preferences.
                        </p>
                    </section>


                    {/* Public Profile */}
                    <section className="mb-16">

                        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <h2 className="font-serif text-[24px] text-gray-900">
                            Public Profile
                        </h2>

                        <span className="text-[10px] font-semibold tracking-wider text-gray-500">
                            VISIBILITY: PUBLIC
                        </span>
                        </div>


                        {/* Image Placeholder */}
                        <div className="mt-5 h-48 w-full overflow-hidden rounded">
                            <img
                                src={imagePlaceholder}
                                alt="Store header"
                                className="h-full w-full object-cover"
                            />
                        </div>


                        {/* Store Name */}
                        <div className="mt-6">
                        <label className="text-[10px] font-semibold tracking-wider text-gray-500">
                            STORE NAME
                        </label>

                        <input
                            type="text"
                            defaultValue="Chisom Premium Hair"
                            className="mt-2 w-full border-b border-red-100 bg-transparent px-2 py-2 text-[16px] text-gray-800 outline-none focus:border-primary"
                        />
                        </div>


                        {/* Store Bio */}
                        <div className="mt-5">
                        <label className="text-[10px] font-semibold tracking-wider text-gray-500">
                            STORE BIO
                        </label>

                        <textarea
                            defaultValue="Curating the finest selection of artisanal beauty and wellness essentials. We focus on sustainability, luxury textures, and proven results for the modern individual."
                            rows={3}
                            maxLength={250}
                            className="mt-2 w-full resize-none border-b border-red-100 bg-transparent px-2 py-2 text-[16px] leading-6 text-gray-800 outline-none focus:border-primary"
                        />

                        <div className="mt-2 text-right text-[10px] text-gray-400">
                            142 / 250 characters
                        </div>
                        </div>

                    </section>


                    {/* Account Settings */}
                    <section className="mb-16">

                        <div className="flex flex-col gap-3 border-b border-gray-200 pb-4 md:flex-row md:items-center md:justify-between">

                        <h2 className="font-serif text-[24px] text-gray-900">
                            Account Settings
                        </h2>

                        <div className="flex w-fit items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-primary">
                            <LockKeyhole size={13} />

                            <span className="text-[10px] font-semibold">
                            ESCROW PROTECTED
                            </span>
                        </div>

                        </div>


                        <div className="mt-5 flex flex-col gap-8 md:flex-row">

                        {/* Login Email */}
                        <div className="w-full md:w-1/2">
                            <label className="text-[10px] font-semibold tracking-wider text-gray-500">
                            LOGIN EMAIL
                            </label>

                            <input
                            type="email"
                            defaultValue="admin@luxebeauty.co"
                            className="mt-2 w-full border-b border-red-100 bg-transparent px-2 py-2 text-[16px] text-gray-800 outline-none focus:border-primary"
                            />
                        </div>


                        {/* Current Password */}
                        <div className="w-full md:w-1/2">
                            <label className="text-[10px] font-semibold tracking-wider text-gray-500">
                            CURRENT PASSWORD
                            </label>

                            <input
                            type="password"
                            defaultValue="password123"
                            className="mt-2 w-full border-b border-red-100 bg-transparent px-2 py-2 text-[16px] text-gray-800 outline-none focus:border-primary"
                            />
                        </div>

                        </div>


                        <button className="mt-4 text-[13px] text-primary hover:underline">
                        Request Password Reset
                        </button>

                    </section>


                    {/* Notification Preferences */}
                    <section className="mb-16">

                        <h2 className="border-b border-gray-200 pb-4 font-serif text-[24px] text-gray-900">
                        Notification Preferences
                        </h2>


                        <div className="mt-5 flex flex-col gap-6">

                        {/* Order Alerts */}
                        <div className="flex items-center justify-between gap-6">

                            <div>
                            <h3 className="text-[14px] font-semibold text-gray-800">
                                Order Alerts
                            </h3>

                            <p className="text-[13px] text-gray-500">
                                Instant email when a new purchase is made through escrow.
                            </p>
                            </div>

                            <Toggle comparison={notificationPreference.orders} onclick={() => handleNotificationPreference("orders")} />

                        </div>


                        {/* Payout Confirmations */}
                        <div className="flex items-center justify-between gap-6">

                            <div>
                            <h3 className="text-[14px] font-semibold text-gray-800">
                                Payout Confirmations
                            </h3>

                            <p className="text-[13px] text-gray-500">
                                Notify me when funds are released from escrow to my bank.
                            </p>
                            </div>

                            <Toggle comparison={notificationPreference.payout} onclick={() => handleNotificationPreference("payout")} />

                        </div>


                        {/* Marketing Insights */}
                        <div className="flex items-center justify-between gap-6">

                            <div>
                            <h3 className="text-[14px] font-semibold text-gray-800">
                                Marketing Insights
                            </h3>

                            <p className="text-[13px] text-gray-500">
                                Weekly performance summaries and beauty industry trends.
                            </p>
                            </div>

                            <Toggle comparison={notificationPreference.marketing} onclick={() => handleNotificationPreference("marketing")} />

                        </div>

                        </div>

                    </section>


                    {/* Payout Bank Details */}
                    <section className="mb-16">

                        <div className="flex flex-col gap-3 border-b border-gray-200 pb-4 md:flex-row md:items-center md:justify-between">

                        <h2 className="font-serif text-[24px] text-gray-900">
                            Payout Bank Details
                        </h2>

                        <div className="flex items-center gap-2 text-gray-500">
                            <Landmark size={18} />

                            <span className="text-[10px] font-semibold tracking-wider">
                            VERIFIED ACCOUNT
                            </span>
                        </div>

                        </div>


                        {/* Bank Card */}
                        <div className="mt-5 flex flex-col gap-5 rounded bg-white p-5 md:flex-row md:items-center md:justify-between">

                        <div>

                            <p className="text-[10px] font-semibold tracking-wider text-gray-500">
                            BANK NAME
                            </p>

                            <p className="mt-1 text-[16px] text-gray-800">
                            Global Reserve International
                            </p>


                            <div className="mt-5 flex gap-10">

                            <div>
                                <p className="text-[10px] font-semibold tracking-wider text-gray-500">
                                ACCOUNT ENDING IN
                                </p>

                                <p className="mt-1 text-[15px] text-gray-800">
                                •••• 4492
                                </p>
                            </div>


                            <div>
                                <p className="text-[10px] font-semibold tracking-wider text-gray-500">
                                CURRENCY
                                </p>

                                <p className="mt-1 text-[15px] text-gray-800">
                                USD ($)
                                </p>
                            </div>

                            </div>

                        </div>


                        <button className="self-start text-primary hover:opacity-70">
                            <Pencil size={20} />
                        </button>

                        </div>


                        <p className="mt-5 text-[13px] text-gray-500">
                        Changes to bank details require a 48-hour security hold before the
                        next payout cycle.
                        </p>

                    </section>


                    {/* Action Buttons */}
                    <div className="flex flex-col-reverse gap-4 border-t border-gray-200 pt-8 md:flex-row md:items-center md:justify-between">

                        <button className="bg-gray-600 px-7 py-3 text-[13px] font-medium text-white hover:bg-gray-700">
                        DISCARD CHANGES
                        </button>

                        <button className="bg-primary px-7 py-3 text-[13px] font-medium text-white hover:opacity-90">
                        SAVE SETTINGS
                        </button>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default VendorSetting;