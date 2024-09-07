import {lusitana} from "../../ui/fonts"
export default function CounterPage() {
  return (
    <main className="bg-[#141332] text-white">
        <h1 className={`${lusitana} mb-4 text-xl md:text-2xl`}>DashBoard</h1>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {/* <Card title="Collected" value={totalPaidInvoices} type="collected"></Card> */}
            {/* <Card title="Pending" value={totalPendingInvoices} type="pending"></Card> */}
            {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices"></Card> */}
            {/* <Card title="Total Customers" value={numberOfCustomers} type="customers"></Card> */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            
        </div>
    </main>
  );
}