
import { useState } from 'react';
import { Search, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export type KnowledgeBaseItem = {
  title: string;
  description: string;
  url: string;
};

type SupportKnowledgeBaseProps = {
  articles: KnowledgeBaseItem[];
};

const SupportKnowledgeBase = ({ articles }: SupportKnowledgeBaseProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Generate random pastel background colors for each article
  const getBgColor = (index: number) => {
    const colors = [
      'bg-red-50 border-red-100',
      'bg-blue-50 border-blue-100',
      'bg-green-50 border-green-100',
      'bg-yellow-50 border-yellow-100',
      'bg-indigo-50 border-indigo-100',
      'bg-purple-50 border-purple-100',
    ];
    return colors[index % colors.length];
  };
  
  return (
    <div>
      <h2 className="heading-2 mb-6">Knowledge Base</h2>
      
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search knowledge base articles..."
            className="pl-10 pr-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-schedise-indigo focus:border-transparent shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {filteredArticles.map((article, index) => (
          <Link 
            key={index} 
            to={article.url}
            onClick={scrollToTop}
            className={`group block border rounded-lg transition-all duration-200 overflow-hidden ${getBgColor(index)}`}
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-white/80 flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-schedise-indigo" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-schedise-indigo transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="text-schedise-indigo font-medium flex items-center">
                    Read more 
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredArticles.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
          <Search size={48} className="mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500 mb-2">No articles found matching "{searchTerm}"</p>
          <p className="text-sm text-gray-400">Try using different keywords or browse all articles</p>
        </div>
      )}
    </div>
  );
};

export default SupportKnowledgeBase;
