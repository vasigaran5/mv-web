import React, { useState, useEffect } from 'react';

export default function Inventory() {
  const [products, setProducts] = useState([
    { id: 1, name: 'A4 Paper Ream', sku: 'A4-01', hsn: '4802', category: 'Paper', unit: 'PCS', purchasePrice: '250', salePrice: '313.95', stockQty: 1, lowStockAlert: 5, gstRate: '12%', location: 'Main Warehouse' },
    { id: 2, name: 'Wireless Mouse', sku: 'WM-02', hsn: '8471', category: 'Electronics', unit: 'PCS', purchasePrice: '350', salePrice: '499.00', stockQty: 3, lowStockAlert: 10, gstRate: '18%', location: 'Main Warehouse' },
    { id: 3, name: 'USB-C Cable', sku: 'CBL-03', hsn: '8544', category: 'Electronics', unit: 'PCS', purchasePrice: '120', salePrice: '199.00', stockQty: 8, lowStockAlert: 15, gstRate: '18%', location: 'Main Warehouse' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [lowStockOnly, setLowStockOnly] = useState(false);

  // Form state for adding new product
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    hsn: '',
    category: '- None -',
    unit: 'PCS',
    purchasePrice: '',
    salePrice: '',
    stockQty: '',
    lowStockAlert: '5',
    gstRate: '18%',
    location: ''
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedInventory');
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever products change
  const saveToLocalStorage = (updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem('savedInventory', JSON.stringify(updatedProducts));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...formData,
      stockQty: Number(formData.stockQty) || 0,
      lowStockAlert: Number(formData.lowStockAlert) || 5
    };

    const updated = [newProduct, ...products];
    saveToLocalStorage(updated);
    setIsModalOpen(false);

    // Reset form
    setFormData({
      name: '',
      sku: '',
      hsn: '',
      category: '- None -',
      unit: 'PCS',
      purchasePrice: '',
      salePrice: '',
      stockQty: '',
      lowStockAlert: '5',
      gstRate: '18%',
      location: ''
    });
  };

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id);
    saveToLocalStorage(updated);
  };

  // Filter products based on search and low stock toggle
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (p.sku && p.sku.toLowerCase().includes(searchTerm.toLowerCase()));
    const isLowStock = p.stockQty <= p.lowStockAlert;
    return lowStockOnly ? matchesSearch && isLowStock : matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 relative">
      
      {/* Top Header & Action */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Inventory</h1>
          <p className="text-xs text-gray-500 font-medium">Manage stock levels, pricing, and product catalog</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold rounded-xl shadow-md transition cursor-pointer"
        >
          + Add product
        </button>
      </div>

      {/* Search & Filters Bar */}
      <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] flex flex-col sm:flex-row justify-between items-center gap-4">
        <input 
          type="text"
          placeholder="Search name / SKU / HSN..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-80 bg-white border border-[#eae5dd] p-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#2c3e35]"
        />
        <label className="flex items-center space-x-2 text-xs font-bold text-gray-700 cursor-pointer">
          <input 
            type="checkbox" 
            checked={lowStockOnly} 
            onChange={(e) => setLowStockOnly(e.target.checked)}
            className="rounded border-gray-300 text-[#2c3e35] focus:ring-[#2c3e35]"
          />
          <span>Low stock only</span>
        </label>
      </div>

      {/* Products Table */}
      <div className="bg-[#fbfaf7]/90 rounded-2xl border border-[#eae5dd] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-[#f3efe6] border-b border-[#eae5dd] text-gray-500 font-bold">
              <th className="p-4">NAME</th>
              <th className="p-4">SKU / HSN</th>
              <th className="p-4 text-center">STOCK</th>
              <th className="p-4 text-right">SALE PRICE</th>
              <th className="p-4 text-center">GST %</th>
              <th className="p-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-8 text-center text-gray-400">No products found</td>
              </tr>
            ) : (
              filteredProducts.map((p) => {
                const isLow = p.stockQty <= p.lowStockAlert;
                return (
                  <tr key={p.id} className="border-b border-gray-100 hover:bg-white/60 transition">
                    <td className="p-4 font-bold text-gray-900">{p.name}</td>
                    <td className="p-4 text-gray-500">{p.sku || '-'} <span className="text-[10px] text-gray-400 block">{p.hsn}</span></td>
                    <td className="p-4 text-center">
                      <span className={`px-2.5 py-1 rounded-lg font-bold ${isLow ? 'bg-red-50 text-[#a65d57] border border-red-200' : 'bg-gray-100 text-gray-800'}`}>
                        {p.stockQty} {p.unit}
                      </span>
                    </td>
                    <td className="p-4 text-right font-black text-gray-900">₹ {p.salePrice}</td>
                    <td className="p-4 text-center text-gray-600 font-medium">{p.gstRate}</td>
                    <td className="p-4 text-right space-x-3">
                      <button onClick={() => handleDelete(p.id)} className="text-[#a65d57] font-bold hover:underline cursor-pointer">Delete</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ADD PRODUCT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-[#fbfaf7] border border-[#eae5dd] w-full max-w-xl rounded-3xl p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto text-xs">
            
            <div className="flex justify-between items-center border-b border-[#eae5dd] pb-3">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Add product</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700 font-bold text-base cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="font-bold text-gray-600 block mb-1">Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium" placeholder="Product name" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-600 block mb-1">SKU</label>
                  <input type="text" name="sku" value={formData.sku} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="e.g. A4-01" />
                </div>
                <div>
                  <label className="font-bold text-gray-600 block mb-1">HSN / SAC</label>
                  <input type="text" name="hsn" value={formData.hsn} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="e.g. 4802" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Category</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl">
                    <option>- None -</option>
                    <option>Paper</option>
                    <option>Electronics</option>
                    <option>Raw Materials</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Unit</label>
                  <select name="unit" value={formData.unit} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl">
                    <option>PCS</option>
                    <option>KG</option>
                    <option>BOX</option>
                    <option>MTRS</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Purchase price ₹</label>
                  <input type="number" name="purchasePrice" value={formData.purchasePrice} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="0" />
                </div>
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Sale price ₹</label>
                  <input type="number" name="salePrice" value={formData.salePrice} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="0" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Stock qty</label>
                  <input type="number" name="stockQty" value={formData.stockQty} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-bold" placeholder="0" />
                </div>
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Low-stock alert at</label>
                  <input type="number" name="lowStockAlert" value={formData.lowStockAlert} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-600 block mb-1">GST rate %</label>
                  <select name="gstRate" value={formData.gstRate} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl">
                    <option>0%</option>
                    <option>5%</option>
                    <option>12%</option>
                    <option>18%</option>
                    <option>28%</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Location / warehouse</label>
                  <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="Main Warehouse" />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-[#eae5dd]">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-xl cursor-pointer">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-[#2c3e35] hover:bg-[#1f2c25] text-white font-bold rounded-xl shadow-md cursor-pointer">
                  Save product
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}