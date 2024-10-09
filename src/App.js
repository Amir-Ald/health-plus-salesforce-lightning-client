import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Users, Dumbbell, CreditCard, BarChart } from "lucide-react"

export default function HealthPlusApp() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">HealthPlus</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
            <Users className="mr-3" />
            Members
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <CalendarDays className="mr-3" />
            Classes
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Dumbbell className="mr-3" />
            Equipment
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <CreditCard className="mr-3" />
            Billing
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <BarChart className="mr-3" />
            Reports
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">1,234</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Classes Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">8</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Revenue This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$45,678</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="members">
            <Card>
              <CardHeader>
                <CardTitle>Add New Member</CardTitle>
                <CardDescription>Enter the details of the new member below.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="johndoe@example.com" type="email" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Add Member</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="classes">
            <Card>
              <CardHeader>
                <CardTitle>Schedule New Class</CardTitle>
                <CardDescription>Enter the details of the new class below.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="className">Class Name</Label>
                      <Input id="className" placeholder="Yoga" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="instructor">Instructor</Label>
                      <Input id="instructor" placeholder="Jane Smith" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Schedule Class</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}