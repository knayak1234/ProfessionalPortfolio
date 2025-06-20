import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  affiliation: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export default function AdminPage() {
  const queryClient = useQueryClient();

  const { data: messages = [], isLoading } = useQuery<ContactMessage[]>({
    queryKey: ['/api/admin/messages'],
    queryFn: async () => {
      const response = await fetch('/api/admin/messages');
      if (!response.ok) throw new Error('Failed to fetch messages');
      return response.json();
    },
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/messages/${id}/read`, { method: 'PATCH' });
      if (!response.ok) throw new Error('Failed to mark as read');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/messages'] });
    },
  });

  const handleMarkAsRead = (id: number) => {
    markAsReadMutation.mutate(id);
  };

  const getSubjectLabel = (subject: string) => {
    switch (subject) {
      case 'research-collaboration':
        return 'Research Collaboration';
      case 'general-inquiry':
        return 'General Inquiry';
      case 'media-interview':
        return 'Media Interview';
      case 'conference-invitation':
        return 'Conference Invitation';
      default:
        return 'Other';
    }
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'research-collaboration':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'general-inquiry':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      case 'media-interview':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'conference-invitation':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const unreadCount = messages.filter((msg: ContactMessage) => !msg.read).length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Contact Messages
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {messages.length} total messages • {unreadCount} unread
        </p>
      </div>

      {messages.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No contact messages yet.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((message: ContactMessage) => (
            <Card key={message.id} className={`${!message.read ? 'border-blue-200 dark:border-blue-800' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">
                      {message.name}
                      {!message.read && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          New
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{message.email}</span>
                      <span>•</span>
                      <span>{formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getSubjectColor(message.subject)}>
                      {getSubjectLabel(message.subject)}
                    </Badge>
                    {!message.read && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleMarkAsRead(message.id)}
                        disabled={markAsReadMutation.isPending}
                      >
                        Mark as Read
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Affiliation
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {message.affiliation}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </p>
                    <p className="text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
                      {message.message}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}