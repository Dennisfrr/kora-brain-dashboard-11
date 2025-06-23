
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Search, 
  Filter, 
  Eye,
  Calendar,
  MessageCircle,
  TrendingUp
} from 'lucide-react';

const fetchLeads = async () => {
  const response = await fetch('http://localhost:3005/api/leads?limit=20');
  if (!response.ok) throw new Error('Erro ao buscar leads');
  return response.json();
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'agendado': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'alto': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'médio': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'baixo': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

export const LeadsPage = () => {
  const { data: leadsData, isLoading } = useQuery({
    queryKey: ['leads'],
    queryFn: fetchLeads,
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card className="animate-pulse bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="h-8 bg-gray-800 rounded w-1/4 mb-4"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-800 rounded"></div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const leads = leadsData?.data || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Leads</h1>
          <p className="text-gray-400">Gerencie e acompanhe todos os seus leads</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar por nome, telefone ou empresa..."
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:bg-gray-700"
              />
            </div>
            <Button className="bg-white text-black hover:bg-gray-200">Buscar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Users className="w-5 h-5 mr-2 text-white" />
            Lista de Leads ({leads.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leads.map((lead: any) => (
              <div
                key={lead.id}
                className="bg-gray-800 rounded-lg border border-gray-700 p-4 hover:bg-gray-750 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-white">
                        {lead.name || `Lead ${lead.whatsappId?.substring(0, 8)}`}
                      </h3>
                      <Badge className={getStatusColor(lead.meetingInterest)}>
                        {lead.meetingInterest || 'não definido'}
                      </Badge>
                      {lead.currentPlan && (
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {lead.currentPlan}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                      <div>
                        <span className="font-medium text-gray-300">Empresa:</span>
                        <p>{lead.businessName || 'Não informado'}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-300">Tipo:</span>
                        <p>{lead.businessType || 'Não informado'}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-300">Última Interação:</span>
                        <p>{lead.lastInteraction ? new Date(lead.lastInteraction).toLocaleDateString('pt-BR') : 'N/A'}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-300">Dores:</span>
                        <p>{lead.pains?.length || 0} identificadas</p>
                      </div>
                    </div>

                    {lead.lastSummary && (
                      <div className="mt-3 p-3 bg-gray-700/60 rounded-lg">
                        <p className="text-sm text-gray-300 line-clamp-2">
                          {lead.lastSummary}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-700">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-700">
                      <Calendar className="w-4 h-4" />
                    </Button>
                    <Link to={`/dashboard/leads/${lead.id}`}>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-700">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {leads.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-300 mb-2">
                Nenhum lead encontrado
              </h3>
              <p className="text-gray-500">
                Os leads aparecerão aqui quando forem criados pelo sistema.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
