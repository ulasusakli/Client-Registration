// antModal.jsx
import React from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  DatePicker,
  Radio,
  InputNumber,
  Select,
} from "antd";
import "./antModal.css";

const AntModal = ({
  formData,
  setFormData,
  visible,
  onClose,
  onSave,
  onCancel,
}) => {
  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Modal
      title="Hasta Kaydı"
      open={visible}
      onCancel={onClose}
      maskClosable={false}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          İptal Et
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Bilgileri Kaydet
        </Button>,
      ]}
      className="ant-modal-custom"
    >
      <Form layout="vertical">
        <Form.Item label="Ad Soyad">
          <Input
            value={formData.clientName}
            onChange={(e) =>
              setFormData({ ...formData, clientName: e.target.value })
            }
            className="ant-input-custom"
          />
        </Form.Item>
        <Form.Item label="Cinsiyet">
          <Select
            value={formData.clientGender}
            onChange={(value) =>
              setFormData({ ...formData, clientGender: value })
            }
            options={[
              { value: "Kadın", label: "Kadın" },
              { value: "Erkek", label: "Erkek" },
              { value: "LGBT", label: "LGBT" },
            ]}
          />
        </Form.Item>
        <Form.Item label="Telefon">
          <Input
            value={formData.clientPhone}
            onChange={(e) =>
              setFormData({ ...formData, clientPhone: e.target.value })
            }
            addonBefore="+90"
            className="ant-input-custom"
            type="tel"
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            value={formData.clientMail}
            onChange={(e) =>
              setFormData({ ...formData, clientMail: e.target.value })
            }
            className="ant-input-custom"
            type="email"
          />
        </Form.Item>
        <Form.Item label="Doğum Tarihi">
        <DatePicker
            value={formData.birthDate}
            onChange={(date) => setFormData({ ...formData, birthDate: date })}
            className="ant-date-picker-custom"
            format="DD/MM/YYYY"
            showToday={false}
          />
        </Form.Item>
        <Form.Item label="Boy">
          <InputNumber
            value={formData.clientHeight}
            onChange={(value) =>
              setFormData({ ...formData, clientHeight: value })
            }
            addonAfter="cm"
            className="ant-input-number-custom"
          />
        </Form.Item>
        <Form.Item label="Kilo">
          <InputNumber
            value={formData.clientWeight}
            onChange={(value) =>
              setFormData({ ...formData, clientWeight: value })
            }
            addonAfter="kg"
            className="ant-input-number-custom"
          />
        </Form.Item>
        <Form.Item label="Fiziksel Durum">
          <InputNumber
            value={formData.clientPhysical}
            onChange={(value) =>
              setFormData({ ...formData, clientPhysical: value })
            }
            defaultValue={1.1}
            min={0.5}
            max={2}
            step={0.1}
            className="ant-input-number-custom"
          />
        </Form.Item>
        <Form.Item label="Abone Tipi">
          <Radio.Group
            value={formData.subType}
            onChange={(e) =>
              setFormData({ ...formData, subType: e.target.value })
            }
            className="ant-radio-group-custom"
          >
            <Radio value={1} className="ant-radio-button-custom">
              Kategori 1
            </Radio>
            <Radio value={2} className="ant-radio-button-custom">
              Kategori 2
            </Radio>
            <Radio value={3} className="ant-radio-button-custom">
              Kategori 3
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AntModal;
