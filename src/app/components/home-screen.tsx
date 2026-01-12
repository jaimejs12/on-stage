import { useState } from "react";
import { ConcertCard } from "./concert-card";

interface Concert {
  id: string;
  artist: string;
  date: string;
  venue: string;
  city: string;
  image: string;
  isGoing: boolean;
  friendsGoing?: number;
  daysUntil?: number;
}

export function HomeScreen() {
  const [concerts, setConcerts] = useState<Concert[]>([
    {
      id: "1",
      artist: "Arctic Monkeys",
      date: "15 Ene 2026",
      venue: "WiZink Center",
      city: "Madrid",
      image: "https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY4MDE5MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: false,
      friendsGoing: 3,
      daysUntil: 5,
    },
    {
      id: "2",
      artist: "The 1975",
      date: "22 Ene 2026",
      venue: "Palau Sant Jordi",
      city: "Barcelona",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzY3OTkwMDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: false,
      friendsGoing: 1,
      daysUntil: 12,
    },
    {
      id: "3",
      artist: "Tame Impala",
      date: "5 Feb 2026",
      venue: "IFEMA",
      city: "Madrid",
      image: "https://images.unsplash.com/photo-1710951403189-4ddcabb7df65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc2Nzk5NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: false,
      friendsGoing: 5,
    },
    {
      id: "4",
      artist: "Daft Punk Tribute",
      date: "14 Feb 2026",
      venue: "Sala Apolo",
      city: "Barcelona",
      image: "https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBkanxlbnwxfHx8fDE3Njc5OTkxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: false,
    },
  ]);

  const [upcomingConcerts, setUpcomingConcerts] = useState<Concert[]>([
    {
      id: "5",
      artist: "Billie Eilish",
      date: "18 Ene 2026",
      venue: "Estadio Santiago Bernabéu",
      city: "Madrid",
      image: "https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY4MDE5MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: true,
      daysUntil: 8,
    },
    {
      id: "6",
      artist: "Bad Bunny",
      date: "28 Ene 2026",
      venue: "Palau Sant Jordi",
      city: "Barcelona",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzY3OTkwMDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      isGoing: true,
      daysUntil: 18,
    },
  ]);

  const toggleGoing = (id: string, isList: "nearby" | "upcoming") => {
    if (isList === "nearby") {
      setConcerts(
        concerts.map((c) => (c.id === id ? { ...c, isGoing: !c.isGoing } : c))
      );
    } else {
      setUpcomingConcerts(
        upcomingConcerts.map((c) =>
          c.id === id ? { ...c, isGoing: !c.isGoing } : c
        )
      );
    }
  };

  return (
    <div className="pb-24 px-4 pt-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-foreground mb-1">Conciertos</h1>
        <p className="text-muted-foreground text-sm">
          Descubre y organiza tus próximos shows
        </p>
      </div>

      {/* Conciertos cerca de ti */}
      <section className="mb-8">
        <h2 className="mb-4 text-foreground">Conciertos cerca de ti</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {concerts.map((concert) => (
            <div
              key={concert.id}
              className="shrink-0 w-70 snap-start"
            >
              <ConcertCard
                {...concert}
                onToggleGoing={() => toggleGoing(concert.id, "nearby")}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Tus próximos conciertos */}
      {upcomingConcerts.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-foreground">Tus próximos conciertos</h2>
          <div className="space-y-4">
            {upcomingConcerts.map((concert) => (
              <ConcertCard
                key={concert.id}
                {...concert}
                onToggleGoing={() => toggleGoing(concert.id, "upcoming")}
              />
            ))}
          </div>
        </section>
      )}

      {/* Conciertos de amigos */}
      <section className="mb-8">
        <h2 className="mb-4 text-foreground">A donde van tus amigos</h2>
        <div className="space-y-4">
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-start gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs">
                  JL
                </div>
                <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-card flex items-center justify-center text-xs">
                  AM
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-card flex items-center justify-center text-xs">
                  CR
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm mb-1">
                  <span className="text-foreground">3 amigos</span>{" "}
                  <span className="text-muted-foreground">van a</span>
                </p>
                <p className="text-foreground">Arctic Monkeys</p>
                <p className="text-muted-foreground text-sm">
                  15 Ene · WiZink Center
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-start gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent/30 border-2 border-card flex items-center justify-center text-xs">
                  MG
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm mb-1">
                  <span className="text-foreground">1 amigo</span>{" "}
                  <span className="text-muted-foreground">va a</span>
                </p>
                <p className="text-foreground">The 1975</p>
                <p className="text-muted-foreground text-sm">
                  22 Ene · Palau Sant Jordi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}