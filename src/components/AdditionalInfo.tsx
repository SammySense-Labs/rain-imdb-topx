interface AdditionalInfoProps {
  country: string;
  languages: string;
  budget: number | undefined;
  revenue: number | undefined;
}

export function AdditionalInfo({ country, languages, budget, revenue }: AdditionalInfoProps) {
  // Format currency as '$X.XM' for large numbers, and '$X,XXX,XXX' for amounts less than 1 million
  const formatCurrency = (amount?: number) => {
    if (typeof amount !== "number" || amount <= 0) return "$0";
    if (amount >= 1_000_000) {
      const millions = amount / 1_000_000;
      // Show one decimal if not a round number, otherwise no decimal
      const display = millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1);
      return `$${display}M`;
    }
    return amount.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  };

  return (
    <div className="bg-[#3a265e]/80 rounded-xl p-5 text-white mt-2">
      <div className="font-bold mb-2 text-lg">Additional Information</div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div>Country:</div>
          <div>Language:</div>
          <div>Budget:</div>
          <div>Box Office Revenue:</div>
        </div>
        <div className="flex-1 text-right md:text-left">
          <div>{country}</div>
          <div>{languages}</div>
          <div>{formatCurrency(budget)}</div>
          <div>{formatCurrency(revenue)}</div>
        </div>
      </div>
    </div>
  );
} 