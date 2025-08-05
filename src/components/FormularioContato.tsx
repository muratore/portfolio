"use client"

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const FormularioContato = () => {
 const form = useRef<HTMLFormElement>(null); // Ref para o formulário HTML
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Função genérica para lidar com a mudança nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o recarregamento da página
    setLoading(true);
    setStatusMessage('');
    setIsSuccess(false);

    if (!form.current) {
      setStatusMessage('Erro: Formulário não encontrado.');
      setLoading(false);
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage('Erro de configuração: IDs ou Chave Pública do MailJS ausentes. Verifique suas variáveis de ambiente.');
      setLoading(false);
      return;
    }

    try {
      // Envia o e-mail usando o MailJS
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      });

      setStatusMessage('Mensagem enviada com sucesso!');
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
    } catch (error) {
      console.error('Falha ao enviar a mensagem:', error);
      setStatusMessage('Falha ao enviar a mensagem. Tente novamente mais tarde.');
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="max-w-[800px] mx-auto p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name" // O 'name' deve corresponder à variável no seu template MailJS
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email" // O 'name' deve corresponder à variável no seu template MailJS
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message" // O 'name' deve corresponder à variável no seu template MailJS
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
        >
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>

      {statusMessage && (
        <div className={`mt-4 p-3 rounded-md text-center ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {statusMessage}
        </div>
      )}
    </div>
  )
}

export default FormularioContato