import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface CertificationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificationForm = ({ isOpen, onClose }: CertificationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    productType: "",
    certificationNeeded: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Certification Request Submitted",
      description: "We'll contact you within 24 hours to discuss your certification needs.",
    });
    onClose();
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      productType: "",
      certificationNeeded: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">Get Certified</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleChange("contactPerson", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="productType">Product Type *</Label>
                <Select onValueChange={(value) => handleChange("productType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fruits">Fresh Fruits</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="grains">Grains & Cereals</SelectItem>
                    <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                    <SelectItem value="processed">Processed Foods</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="certificationNeeded">Certification Needed *</Label>
                <Select onValueChange={(value) => handleChange("certificationNeeded", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select certification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="globalagap">GLOBALG.A.P.</SelectItem>
                    <SelectItem value="sabs">SABS</SelectItem>
                    <SelectItem value="ppecb">PPECB</SelectItem>
                    <SelectItem value="organic">Organic Certification</SelectItem>
                    <SelectItem value="halal">Halal Certification</SelectItem>
                    <SelectItem value="multiple">Multiple Certifications</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your certification requirements, production volumes, target markets, etc."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Submit Certification Request
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CertificationForm;